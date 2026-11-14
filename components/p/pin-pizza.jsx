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
		"content": `<style>.gk-4v7bpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.457 18.62L5.88 10.076A1.75 1.75 0 0 1 7.423 7.5h9.154a1.75 1.75 0 0 1 1.543 2.576l-4.577 8.544a1.75 1.75 0 0 1-3.086 0M3.5 4.5q8.5-3 17 0M10 11h.01m3.24 1.5h.01");
}
</style><path class="gk-4v7bpn"/>`,
		"fallback": "uix:pin-pizza",
	});
}

export default Component;
