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
		"content": `<style>.dwlya1t8x {
  d: path("m13.5 12 2.5 2.5 -2.5 2.5");
}

.ggik2wgcv {
  d: path("M9 9V5h6v4");
}

.m6r9k7-tj {
  d: path("M8 14.5h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s25vf1bvx {
  d: path("M3 11a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="s25vf1bvx"/><path class="ggik2wgcv"/><path class="m6r9k7-tj"/><path class="dwlya1t8x"/></g>`,
		"fallback": "iconmind:payroll-run-outline-bold",
	});
}

export default Component;
