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
		"content": `<style>.o2i3q_m6d {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-12 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-12 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-6 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="o2i3q_m6d"/>`,
		"fallback": "uix:phone-keypad",
	});
}

export default Component;
