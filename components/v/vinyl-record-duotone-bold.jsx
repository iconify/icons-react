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
		"content": `<style>.a8v2s5z3p {
  fill: currentColor;
  d: path("M3 4v16h14V4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.bxyh6cbnl {
  d: path("M9 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.cxoq7xbon {
  fill: currentColor;
  d: path("M14 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gbt-66b2v {
  fill: currentColor;
  d: path("M9 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
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

.vrj8akbcc {
  d: path("M3 4v16h14V4Z");
}

.ync9d6bsc {
  d: path("M14 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="a8v2s5z3p"/><path class="gbt-66b2v"/><path class="cxoq7xbon"/><path class="vrj8akbcc"/><path class="bxyh6cbnl"/><path class="ync9d6bsc"/></g>`,
		"fallback": "iconmind:vinyl-record-duotone-bold",
	});
}

export default Component;
