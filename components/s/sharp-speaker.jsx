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
		"content": `<style>.mj3mf92ao {
  fill: currentColor;
  d: path("M19 2H5v19.99h14zm-7 2c1.1 0 2 .9 2 2s-.9 2-2 2a2 2 0 1 1 0-4m0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3");
}
</style><path class="mj3mf92ao"/>`,
		"fallback": "ic:sharp-speaker",
	});
}

export default Component;
