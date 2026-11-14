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
		"content": `<style>.t_60_bb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 2.5h8.75A2.625 2.625 0 0 1 19 5.125v3.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 8.875v-3.75A2.625 2.625 0 0 1 7.625 2.5m4.375 9v10m-4.5 0h9M8 5.5h3m-3 3h8");
}
</style><path class="t_60_bb5t"/>`,
		"fallback": "uix:pos-customer-display",
	});
}

export default Component;
