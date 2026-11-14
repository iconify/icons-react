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
		"content": `<style>.e1jn-t-mb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.5 19.5C2.5 16 4.5 14 7 14s4.5 2 4.5 5.5M14 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-.095 7.334C14.709 14.463 15.797 14 17 14c.548 0 1.073.096 1.557.283M14.75 18l2 2L21 15.75");
}
</style><path class="e1jn-t-mb"/>`,
		"fallback": "uix:security-two-person",
	});
}

export default Component;
