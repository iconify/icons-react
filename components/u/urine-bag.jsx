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
		"content": `<style>.cpnn9wn6m {
  d: path("M15 10.5h-2.5m2.5 3h-1.5m1.5 3h-2.5m-1-9v-3a1.75 1.75 0 0 0-3.5 0m0 15v1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxqula1vx {
  width: 13px;
  height: 12px;
  x: 5px;
  y: 7.5px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="wxqula1vx"/><path class="cpnn9wn6m"/></g>`,
		"fallback": "iconoven:urine-bag",
	});
}

export default Component;
