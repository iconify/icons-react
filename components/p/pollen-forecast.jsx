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

.yvezpybqa {
  d: path("M18.75 17h2.75v2.75");
}

.zh8micthm {
  d: path("M7.5 6a2.5 2.5 0 1 1 4 0a2.5 2.5 0 1 1 0 4a2.5 2.5 0 1 1-4 0a2.5 2.5 0 1 1 0-4m2 8v7.5m0-1.5q-4.5 0-5-3.5q4 0 5 3.5m5 1l3-3l1.5 1.5l2.5-2.5");
}
</style><g class="hntgybcog"><path class="zh8micthm"/><path class="yvezpybqa"/></g>`,
		"fallback": "uix:pollen-forecast",
	});
}

export default Component;
