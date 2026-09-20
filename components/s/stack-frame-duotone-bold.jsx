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
		"content": `<style>.g-g6w6buq {
  d: path("M7 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.guoi_acnp {
  fill: currentColor;
  d: path("M7 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kfrn5yi5h {
  fill: currentColor;
  d: path("M4 11a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n8sqmebht {
  d: path("M7 18h10");
}

.p8hpvcvzr {
  d: path("M11.5 11h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t46_l1b3y {
  d: path("M7 4h10");
}

.tz8sdybnu {
  d: path("M4 11a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3");
}
</style><g class="s0phu2bbs"><path class="kfrn5yi5h"/><path class="guoi_acnp"/><path class="t46_l1b3y"/><path class="tz8sdybnu"/><path class="g-g6w6buq"/><path class="p8hpvcvzr"/><path class="n8sqmebht"/></g>`,
		"fallback": "iconmind:stack-frame-duotone-bold",
	});
}

export default Component;
