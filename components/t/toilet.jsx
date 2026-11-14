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
		"content": `<style>.y47c4db0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 3.5h1A1.75 1.75 0 0 1 11 5.25v5A1.75 1.75 0 0 1 9.25 12h-1a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 8.25 3.5M6.5 12H18c0 3.25-1.75 5.25-4 5.75v2.75H9.5v-3c-1.75-1-3-3-3-5.5");
}
</style><path class="y47c4db0p"/>`,
		"fallback": "uix:toilet",
	});
}

export default Component;
