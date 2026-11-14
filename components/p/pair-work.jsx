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
		"content": `<style>.kgtr5odsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m9 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M3.5 14c0-2.5 1.75-4 4-4s4 1.5 4 4m1 0c0-2.5 1.75-4 4-4s4 1.5 4 4m-18 3.5h19M5 17.5V21m14-3.5V21");
}
</style><path class="kgtr5odsr"/>`,
		"fallback": "uix:pair-work",
	});
}

export default Component;
