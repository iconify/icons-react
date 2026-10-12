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
		"content": `<style>.nsu8fg46w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12c1.75-2.5 3.75-4 5-4c.5 0 .75.25 1 .5c.25-.25.5-.5 1-.5c1.25 0 3.25 1.5 5 4c-1.75 2.5-3.75 4.25-6 4.25S4.5 14.5 2.75 12m2.5 0h7M17 9.5a3.5 3.5 0 0 1 0 5M19.5 7a9 9 0 0 1 0 10");
}
</style><path class="nsu8fg46w"/>`,
		"fallback": "iconoven:lip-sync",
	});
}

export default Component;
