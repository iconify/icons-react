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
		"content": `<style>.dfryx5b8t {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 16H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 3m6 13v5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kvffg2edq {
  d: path("M5.5 12v-2L8 9.5L9.75 7h4.5L16 9.5l2.5.5v2H17a1.75 1.75 0 0 0-3.5 0h-3A1.75 1.75 0 0 0 7 12Z");
}
</style><g class="hntgybcog"><path class="dfryx5b8t"/><path class="kvffg2edq"/></g>`,
		"fallback": "uix:safety-car-board",
	});
}

export default Component;
