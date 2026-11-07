import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wzipiyblh {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414L18.586 20H5a3 3 0 0 1-3-3V7c0-.942.439-1.827 1.191-2.394L1.293 2.707a.999.999 0 1 1 1.414-1.414m11.707 8.879L8.243 4H19c.448 0 .889.099 1.293.292Zm6.518-3.69l.776-.775c.193.404.292.845.292 1.293v10q0 .345-.077.68l-6.095-6.094Z");
}
</style><path class="wzipiyblh"/>`,
		"fallback": "coolicons:mail-off-fill",
	});
}

export default Component;
