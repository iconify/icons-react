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
		"content": `<style>.a0ikyhbck {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20 18 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f2ie39jzc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m18 6 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i857i-b1f {
  d: path("M4 20 18 6");
}

.j3n3f_mcr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 12c3 -3 5 3 8 0s5 3 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m0hvambgh {
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mzm25fejl {
  d: path("m18 6 3 -3");
}

.n2wmvdxwf {
  fill: currentColor;
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.th7wxwuos {
  d: path("M4 12c3 -3 5 3 8 0s5 3 8 0");
}
</style><g class="s0phu2bbs"><path class="n2wmvdxwf"/><path class="a0ikyhbck"/><path class="f2ie39jzc"/><path class="j3n3f_mcr"/><path class="i857i-b1f"/><path class="mzm25fejl"/><path class="m0hvambgh"/><path class="th7wxwuos"/></g>`,
		"fallback": "iconmind:sewing-duotone-bold",
	});
}

export default Component;
