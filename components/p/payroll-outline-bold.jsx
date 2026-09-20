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
		"content": `<style>.ggik2wgcv {
  d: path("M9 9V5h6v4");
}

.ojrtcibbk {
  d: path("M12 12.5v4");
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

.urzylvb1v {
  d: path("M9 14.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="s25vf1bvx"/><path class="ggik2wgcv"/><path class="urzylvb1v"/><path class="ojrtcibbk"/></g>`,
		"fallback": "iconmind:payroll-outline-bold",
	});
}

export default Component;
