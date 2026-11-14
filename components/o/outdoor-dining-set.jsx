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
		"content": `<style>.bi67b_bwa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5c2-5 5.5-7 9-7s7 2 9 7Zm9 0V21m-7-5.5h14m-11.5 0L6 21m10.5-5.5L18 21");
}
</style><path class="bi67b_bwa"/>`,
		"fallback": "uix:outdoor-dining-set",
	});
}

export default Component;
