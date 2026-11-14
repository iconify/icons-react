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
		"content": `<style>.qu3922bgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 3.5h4.5a5.25 5.25 0 0 1 5.25 5.25v3.5a5.25 5.25 0 0 1-5.25 5.25h-4.5a5.25 5.25 0 0 1-5.25-5.25v-3.5A5.25 5.25 0 0 1 9.75 3.5M4.5 11h15M8 14h.01M16 14h.01M7.5 20.5l2-3m7 3l-2-3");
}
</style><path class="qu3922bgp"/>`,
		"fallback": "uix:transit-nearby",
	});
}

export default Component;
