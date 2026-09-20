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
		"content": `<style>.c0xrb9bxf {
  d: path("m17 2 -3 3h3l-4 4");
}

.g6u_b-bqr {
  fill: currentColor;
  d: path("M19 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.haqmubngg {
  fill: currentColor;
  d: path("M3 10h18v10H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mh_3yqm3z {
  d: path("M3 10h18v10H3Z");
}

.mk-ueebig {
  d: path("M9 10v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t7ah1ybjn {
  d: path("M19 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="haqmubngg"/><path class="g6u_b-bqr"/><path class="mh_3yqm3z"/><path class="mk-ueebig"/><path class="c0xrb9bxf"/><path class="t7ah1ybjn"/></g>`,
		"fallback": "iconmind:mana-duotone-bold",
	});
}

export default Component;
