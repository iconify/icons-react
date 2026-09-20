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
		"content": `<style>.edey5sz_g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 7.5 2 -2 2 2 2 -2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g2msy1bmd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14.32 9.5a5.5 5.5 0 1 1 -4.64 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i2xa3obeh {
  d: path("M14.32 9.5a5.5 5.5 0 1 1 -4.64 0");
}

.mj0-vmbss {
  d: path("m8 7.5 2 -2 2 2 2 -2 2 2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="edey5sz_g"/><path class="g2msy1bmd"/><path class="mj0-vmbss"/><path class="i2xa3obeh"/></g>`,
		"fallback": "iconmind:leader-elect-duotone-bold",
	});
}

export default Component;
