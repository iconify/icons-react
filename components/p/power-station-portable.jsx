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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lxvhyacmb {
  d: path("M7.375 8h9.25A4.375 4.375 0 0 1 21 12.375v3.75a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 16.125v-3.75A4.375 4.375 0 0 1 7.375 8M8 8V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V8");
}

.p91w1acym {
  d: path("M6 14.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7.5-1.75H17M13.5 16H17");
}
</style><g class="hntgybcog"><path class="lxvhyacmb"/><path class="p91w1acym"/></g>`,
		"fallback": "uix:power-station-portable",
	});
}

export default Component;
