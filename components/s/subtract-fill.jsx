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
		"content": `<style>.lrnzat1gd {
  fill: currentColor;
  d: path("M174.63 81.35a80 80 0 1 0-93.28 93.28a80 80 0 1 0 93.28-93.28M96 160a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64");
}
</style><path class="lrnzat1gd"/>`,
		"fallback": "ph:subtract-fill",
	});
}

export default Component;
