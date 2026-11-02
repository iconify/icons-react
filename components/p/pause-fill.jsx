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
		"content": `<style>.d-zd_5xuy {
  fill: currentColor;
  d: path("M6 2h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m11 0h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3");
}
</style><path class="d-zd_5xuy"/>`,
		"fallback": "coolicons:pause-fill",
	});
}

export default Component;
