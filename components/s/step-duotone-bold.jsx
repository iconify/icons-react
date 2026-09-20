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
		"content": `<style>.doha7k7ng {
  d: path("M10 11v7");
}

.frqtfdihm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 11h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l2_jeopgb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s54fetbiu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 4v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tbjorldxr {
  d: path("M3 18h7");
}

.uhg14jb-c {
  d: path("M10 11h7");
}

.xh8-ghm1o {
  d: path("M17 4v7");
}

.yzszubbvg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 18h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yzszubbvg"/><path class="l2_jeopgb"/><path class="frqtfdihm"/><path class="s54fetbiu"/><path class="tbjorldxr"/><path class="doha7k7ng"/><path class="uhg14jb-c"/><path class="xh8-ghm1o"/></g>`,
		"fallback": "iconmind:step-duotone-bold",
	});
}

export default Component;
