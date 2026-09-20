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
		"content": `<style>.e1s2le8fv {
  d: path("M5 10h6");
}

.h8oaykbcj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 10h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hy7iybk2m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 3v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lmc6jyb6f {
  d: path("M14 10h7");
}

.mmc_38taf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 17h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p41-m0bke {
  d: path("M5 17h6");
}

.s_qnepbtm {
  d: path("M5 3v14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u6ajjqcac {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 17h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vg0qlegui {
  d: path("M14 17h7");
}

.yshwovfnd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 10h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="hy7iybk2m"/><path class="yshwovfnd"/><path class="h8oaykbcj"/><path class="mmc_38taf"/><path class="u6ajjqcac"/><path class="s_qnepbtm"/><path class="e1s2le8fv"/><path class="lmc6jyb6f"/><path class="p41-m0bke"/><path class="vg0qlegui"/></g>`,
		"fallback": "iconmind:list-tree-duotone-bold",
	});
}

export default Component;
