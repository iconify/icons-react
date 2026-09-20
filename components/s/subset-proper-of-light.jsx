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
		"content": `<style>.ygy78pa7u {
  fill: currentColor;
  d: path("M206 208a6 6 0 0 1-6 6h-72a86 86 0 0 1 0-172h72a6 6 0 0 1 0 12h-72a74 74 0 0 0 0 148h72a6 6 0 0 1 6 6");
}
</style><path class="ygy78pa7u"/>`,
		"fallback": "ph:subset-proper-of-light",
	});
}

export default Component;
