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

.w1a07gb9q {
  d: path("M9 3v6L4 19a1.5 1.5 0 0 0 1.5 2h13a1.5 1.5 0 0 0 1.5-2L15 9V3M7.5 3h9");
}

.wio64zpxq {
  fill: currentColor;
  d: path("M11 13h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 13 18h-2a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 11 13");
}
</style><g class="hntgybcog"><path class="w1a07gb9q"/><path class="wio64zpxq"/></g>`,
		"fallback": "uix:unit-test",
	});
}

export default Component;
