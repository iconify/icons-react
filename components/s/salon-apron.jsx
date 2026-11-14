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
		"content": `<style>.xgx5veb_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.5h8V9q0 2 2.5 2.5v8a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-8Q8 11 8 9Zm0 0a4 4 0 0 1 8 0m-10.5 5L3 15m15.5-3.5L21 15");
}
</style><path class="xgx5veb_x"/>`,
		"fallback": "uix:salon-apron",
	});
}

export default Component;
