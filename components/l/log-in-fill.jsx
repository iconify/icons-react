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
		"content": `<style>.bik34-9wf {
  fill: currentColor;
  d: path("M7 7V5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a.997.997 0 0 0-1 1v2a1 1 0 0 1-2 0m4.293 2.707a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L12.586 13H5a1 1 0 0 1 0-2h7.586Z");
}
</style><path class="bik34-9wf"/>`,
		"fallback": "coolicons:log-in-fill",
	});
}

export default Component;
