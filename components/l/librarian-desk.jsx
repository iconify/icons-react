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
		"content": `<style>.baf2-l53o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 5.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M3 15c0-2.5 2.25-3.75 5-3.75s5 1.25 5 3.75M2.5 15h19M5 15v6.5M19 15v6.5M15.5 15v-3H21v3m-4.5-3V9h4v3");
}
</style><path class="baf2-l53o"/>`,
		"fallback": "uix:librarian-desk",
	});
}

export default Component;
