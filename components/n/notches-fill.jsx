import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c3h09xbhl {
  fill: currentColor;
  d: path("M200 40v152a8 8 0 0 1-8 8H40a8 8 0 0 1-5.66-13.66l152-152A8 8 0 0 1 200 40");
}
</style><path class="c3h09xbhl"/>`,
		"fallback": "ph:notches-fill",
	});
}

export default Component;
