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

.jb29jab_x {
  d: path("M5.125 4h2.75A2.625 2.625 0 0 1 10.5 6.625v2.75A2.625 2.625 0 0 1 7.875 12h-2.75A2.625 2.625 0 0 1 2.5 9.375v-2.75A2.625 2.625 0 0 1 5.125 4m11 0h2.75A2.625 2.625 0 0 1 21.5 6.625v2.75A2.625 2.625 0 0 1 18.875 12h-2.75A2.625 2.625 0 0 1 13.5 9.375v-2.75A2.625 2.625 0 0 1 16.125 4M6.5 12v9.5m11-9.5v9.5M5 6.5l3 3m0-3l-3 3M17.5 6v4");
}

.vxyaz8bbx {
  d: path("m16 8.5l1.5 1.5L19 8.5");
}
</style><g class="hntgybcog"><path class="jb29jab_x"/><path class="vxyaz8bbx"/></g>`,
		"fallback": "uix:lane-control-signal",
	});
}

export default Component;
