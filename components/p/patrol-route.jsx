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
		"content": `<style>.eqp-4_b4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 13.5c-2-2-3.5-4-3.5-7.5a3.5 3.5 0 0 1 7 0c0 3.5-1.5 5.5-3.5 7.5m-14.75 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0c5.75 0 2.75-5.5 6.75-5.5");
}
</style><path class="eqp-4_b4u"/>`,
		"fallback": "uix:patrol-route",
	});
}

export default Component;
