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
		"content": `<style>.a218-cpca {
  d: path("M4 5h16a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4V7a2 2 0 0 1 2 -2");
}

.az5esj3_g {
  d: path("M10.5 9.5 8 12l2.5 2.5");
}

.d_yxl29go {
  d: path("M13.5 9.5 16 12l-2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0v-b4kbr {
  d: path("M8 12h8");
}
</style><g class="hntgybcog"><path class="a218-cpca"/><path class="l0v-b4kbr"/><path class="az5esj3_g"/><path class="d_yxl29go"/></g>`,
		"fallback": "iconmind:token-exchange-outline-thin",
	});
}

export default Component;
