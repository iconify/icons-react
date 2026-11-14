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
		"content": `<style>.eeiehpbdm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5L6 15m14.5 6.5L18 15m-6 1.5v4M2.5 7H13a2.5 2.5 0 1 0-2.5-2.5m-5.5 7h13A2.5 2.5 0 1 0 15.5 9");
}
</style><path class="eeiehpbdm"/>`,
		"fallback": "uix:road-wind",
	});
}

export default Component;
