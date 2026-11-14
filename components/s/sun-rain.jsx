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
		"content": `<style>.e-fy72bzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M12 4.25V2M7.5 6L6 4.5M16.5 6L18 4.5M8.5 16.75l-1 3.75m5-3.75l-1 3.75m5-3.75l-1 3.75");
}
</style><path class="e-fy72bzd"/>`,
		"fallback": "uix:sun-rain",
	});
}

export default Component;
