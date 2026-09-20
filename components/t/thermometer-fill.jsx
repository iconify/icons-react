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
		"content": `<style>.c9pallblo {
  fill: currentColor;
  d: path("M212 56a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-60 50.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M136 104h-32V40a16 16 0 0 1 32 0Z");
}
</style><path class="c9pallblo"/>`,
		"fallback": "ph:thermometer-fill",
	});
}

export default Component;
