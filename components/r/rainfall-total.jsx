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
		"content": `<style>.ncbtvquwj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 11.25H8V20a1.5 1.5 0 0 0 1.5 1.5h6A1.5 1.5 0 0 0 17 20v-8.75M8 16h9M9.25 3S11 5.5 11 6.75a1.75 1.75 0 0 1-3.5 0C7.5 5.5 9.25 3 9.25 3m6.5 0s1.75 2.5 1.75 3.75a1.75 1.75 0 0 1-3.5 0C14 5.5 15.75 3 15.75 3");
}
</style><path class="ncbtvquwj"/>`,
		"fallback": "uix:rainfall-total",
	});
}

export default Component;
