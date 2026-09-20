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
		"content": `<style>.c-vnm8iux {
  d: path("M15 12h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0o_vcb_x {
  d: path("M7 9v3h2.5");
}

.w88m64x8i {
  d: path("M2 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.zb-4rhbsf {
  d: path("M21 7v10");
}
</style><g class="hntgybcog"><path class="w88m64x8i"/><path class="n0o_vcb_x"/><path class="c-vnm8iux"/><path class="zb-4rhbsf"/></g>`,
		"fallback": "iconmind:timeout-flow-outline-thin",
	});
}

export default Component;
