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
		"content": `<style>.vquvuqb6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 18l4-15.5h4L18 18M5.5 18h1a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 6.5 21.5h-1a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 5.5 18m12 0h1a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 17.5 18");
}
</style><path class="vquvuqb6r"/>`,
		"fallback": "uix:print-tongs",
	});
}

export default Component;
