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
		"content": `<style>.hftt8nbje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19M5 14l-1 7m15-7l1 7m-2.5-11H8a2 2 0 0 0 0 4h9.5Zm-7.25-7h4A1.75 1.75 0 0 1 16 4.75v3.5A1.75 1.75 0 0 1 14.25 10h-4A1.75 1.75 0 0 1 8.5 8.25v-3.5A1.75 1.75 0 0 1 10.25 3m2 0v3");
}
</style><path class="hftt8nbje"/>`,
		"fallback": "uix:props-table",
	});
}

export default Component;
