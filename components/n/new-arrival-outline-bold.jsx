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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t0w54r8ah {
  d: path("m9.5 14 2.5 -2.5 2.5 2.5");
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.ul0m4fbfe {
  d: path("M9 17.5h6");
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}
</style><g class="s0phu2bbs"><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="t0w54r8ah"/><path class="ul0m4fbfe"/></g>`,
		"fallback": "iconmind:new-arrival-outline-bold",
	});
}

export default Component;
