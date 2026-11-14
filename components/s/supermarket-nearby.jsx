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
		"content": `<style>.uduud5b9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.424 6h10.902a1.75 1.75 0 0 1 1.709 2.124l-.984 4.5A1.75 1.75 0 0 1 17.341 14H8.409a1.75 1.75 0 0 1-1.71-1.376l-.984-4.5A1.75 1.75 0 0 1 7.424 6M2.5 3h2L7 14m0 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="uduud5b9j"/>`,
		"fallback": "uix:supermarket-nearby",
	});
}

export default Component;
