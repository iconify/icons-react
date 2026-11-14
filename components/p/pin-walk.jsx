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
		"content": `<style>.t-k2skbzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M13 9.25L11 15m-3.5 6.5L11 15l3 3l1 3.5m-6.5-8l1.5-3.25l2.75-.5L16.5 13");
}
</style><path class="t-k2skbzu"/>`,
		"fallback": "uix:pin-walk",
	});
}

export default Component;
