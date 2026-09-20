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
		"content": `<style>.cxjcibior {
  fill: currentColor;
  d: path("M200 136H56.46A72.08 72.08 0 0 0 128 200h72a8 8 0 0 1 0 16h-72a88 88 0 0 1 0-176h72a8 8 0 0 1 0 16h-72a72.08 72.08 0 0 0-71.54 64H200a8 8 0 0 1 0 16");
}
</style><path class="cxjcibior"/>`,
		"fallback": "ph:member-of",
	});
}

export default Component;
