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
		"content": `<style>.feek_ol5u {
  d: path("M8.5 15v-3q0-1.5 1.5-1.5L12.5 7H17l3 3.5q1.5 0 1.5 1.5v3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o10uecc6e {
  d: path("M10 16.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M2.5 8.5q2 0 3.25 1M3.25 12h2.5M2.5 15.5q2 0 3.25-1");
}
</style><g class="hntgybcog"><path class="feek_ol5u"/><path class="o10uecc6e"/></g>`,
		"fallback": "uix:slipstream",
	});
}

export default Component;
