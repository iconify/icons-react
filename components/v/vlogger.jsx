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
		"content": `<style>.yzusb-bsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h6A3.5 3.5 0 0 1 15.5 7v2.5A3.5 3.5 0 0 1 12 13H6a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 6 3.5m10.526 2.658l3-1A1.5 1.5 0 0 1 21.5 6.581v3.338a1.5 1.5 0 0 1-1.974 1.423l-3-1A1.5 1.5 0 0 1 15.5 8.919V7.581a1.5 1.5 0 0 1 1.026-1.423M9 13v3.5M5 21l4-4.5l4 4.5M6.5 7h.01");
}
</style><path class="yzusb-bsd"/>`,
		"fallback": "uix:vlogger",
	});
}

export default Component;
