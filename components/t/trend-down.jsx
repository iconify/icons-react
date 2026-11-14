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
		"content": `<style>.chmcbdc0x {
  d: path("m3 6l5 5.5l4-3l8.5 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sthqgdbph {
  d: path("M15.5 17h5v-5");
}
</style><g class="hntgybcog"><path class="chmcbdc0x"/><path class="sthqgdbph"/></g>`,
		"fallback": "uix:trend-down",
	});
}

export default Component;
