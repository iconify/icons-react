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
		"content": `<style>.e5rxwxb6q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gnfxbib2f {
  d: path("M6 8h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nyl8f3o_r {
  d: path("M6 13h13");
}

.p_44--b8v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 8h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.sb_u66zcg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 13h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="e5rxwxb6q"/><path class="p_44--b8v"/><path class="sb_u66zcg"/><path class="qe97cg-lx"/><path class="gnfxbib2f"/><path class="nyl8f3o_r"/></g>`,
		"fallback": "iconmind:underfit-gap-duotone-thin",
	});
}

export default Component;
