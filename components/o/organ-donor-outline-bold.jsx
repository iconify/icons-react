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
		"content": `<style>.eq1nrcbpl {
  d: path("M4 11a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
}

.ey3upmocl {
  d: path("M14 14h4");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w2atjyb_m {
  d: path("M14 10h6");
}
</style><g class="s0phu2bbs"><path class="okud9xj_d"/><path class="eq1nrcbpl"/><path class="w2atjyb_m"/><path class="ey3upmocl"/></g>`,
		"fallback": "iconmind:organ-donor-outline-bold",
	});
}

export default Component;
