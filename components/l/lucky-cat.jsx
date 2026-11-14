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
		"content": `<style>.gybd5fd_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10V2.5L12 5h3l3.5-2.5V10c0 1.5 1.5 3 1.5 6v5.5H6.5v-5H4A1.5 1.5 0 0 1 2.5 15V9a1.5 1.5 0 0 1 3 0v3.5c1 0 3-1 3-2.5m3-2.5h.01m3.99 0h.01");
}
</style><path class="gybd5fd_t"/>`,
		"fallback": "uix:lucky-cat",
	});
}

export default Component;
