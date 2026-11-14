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
		"content": `<style>.deuzvstov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5h15A1.5 1.5 0 0 1 21 6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 6a1.5 1.5 0 0 1 1.5-1.5m0 3V18A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5V7.5M4.5 11h15m-15 5h15");
}
</style><path class="deuzvstov"/>`,
		"fallback": "uix:pet-food-can",
	});
}

export default Component;
