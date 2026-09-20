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
		"content": `<style>.et81l2oxt {
  d: path("M12 14a4 4 0 0 1 8 0");
}

.g18pqmbuw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 14a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h57xi_b4m {
  d: path("M4 14a4 4 0 0 1 8 0");
}

.i_bfpevyh {
  fill: currentColor;
  d: path("M2 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i8wcjxb1o {
  fill: currentColor;
  d: path("M18 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.iwpbli9gm {
  d: path("M18 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rencte-ct {
  fill: currentColor;
  d: path("M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.s7h002bpl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 14a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tdux9oy4s {
  d: path("M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zjs6ad-6z {
  d: path("M2 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="i_bfpevyh"/><path class="rencte-ct"/><path class="i8wcjxb1o"/><path class="g18pqmbuw"/><path class="s7h002bpl"/><path class="zjs6ad-6z"/><path class="tdux9oy4s"/><path class="iwpbli9gm"/><path class="h57xi_b4m"/><path class="et81l2oxt"/></g>`,
		"fallback": "iconmind:multi-hop-duotone-bold",
	});
}

export default Component;
