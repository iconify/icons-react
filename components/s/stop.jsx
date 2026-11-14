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
		"content": `<style>.b1n-xcbla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.875 4.5h6.25A4.375 4.375 0 0 1 19.5 8.875v6.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 15.125v-6.25A4.375 4.375 0 0 1 8.875 4.5");
}
</style><path class="b1n-xcbla"/>`,
		"fallback": "uix:stop",
	});
}

export default Component;
