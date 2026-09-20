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
		"content": `<style>.dwk04cceb {
  fill: currentColor;
  d: path("m189 188l19.52-19.51a12 12 0 0 0-17-17L172 171l-33.07-33A56 56 0 0 0 124 28H72a12 12 0 0 0-12 12v152a12 12 0 0 0 24 0v-52h23l48 48l-19.52 19.51a12 12 0 0 0 17 17L172 205l19.51 19.52a12 12 0 0 0 17-17ZM84 52h40a32 32 0 0 1 0 64H84Z");
}
</style><path class="dwk04cceb"/>`,
		"fallback": "ph:prescription-bold",
	});
}

export default Component;
