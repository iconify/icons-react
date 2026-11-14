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
		"content": `<style>.eb7ul0t3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9A5.25 5.25 0 1 0 13 9A5.25 5.25 0 1 0 2.5 9m13.75-1.75a2.25 4.75 0 1 0 4.5 0a2.25 4.75 0 1 0-4.5 0M7.75 9h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="eb7ul0t3w"/>`,
		"fallback": "uix:sensor-tamper",
	});
}

export default Component;
