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

.jfl6gcc4m {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M6.5 20.5v-5h4v5m4-2.5h7");
}

.koa6vbczn {
  d: path("m3 9l1.5-5h15L21 9m-1.5 2v1.5M4.5 11v9.5H12");
}
</style><g class="hntgybcog"><path class="koa6vbczn"/><path class="jfl6gcc4m"/></g>`,
		"fallback": "uix:store-minus",
	});
}

export default Component;
