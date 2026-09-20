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
		"content": `<style>.bat3l9f8s {
  fill: currentColor;
  d: path("M40 92h30.06a36 36 0 0 0 67.88 0H216a12 12 0 0 0 0-24h-78.06a36 36 0 0 0-67.88 0H40a12 12 0 0 0 0 24m64-24a12 12 0 1 1-12 12a12 12 0 0 1 12-12m112 96h-14.06a36 36 0 0 0-67.88 0H40a12 12 0 0 0 0 24h94.06a36 36 0 0 0 67.88 0H216a12 12 0 0 0 0-24m-48 24a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="bat3l9f8s"/>`,
		"fallback": "ph:sliders-horizontal-bold",
	});
}

export default Component;
