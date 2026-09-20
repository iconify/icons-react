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
		"content": `<style>.bwel3nf-y {
  d: path("m16 15 2 2 3 -3");
}

.dg7b_2c6d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 10 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fy72pvbym {
  d: path("M4 16h10");
}

.grpcwaciz {
  d: path("m4 10 6 -6");
}

.hxs7cr7lm {
  d: path("M4 7h10");
}

.qw4j82i0h {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 7h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wjnr2p8py {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 15 2 2 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yuup2rlnt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 16h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="qw4j82i0h"/><path class="dg7b_2c6d"/><path class="yuup2rlnt"/><path class="wjnr2p8py"/><path class="hxs7cr7lm"/><path class="grpcwaciz"/><path class="fy72pvbym"/><path class="bwel3nf-y"/></g>`,
		"fallback": "iconmind:self-correct-duotone-bold",
	});
}

export default Component;
