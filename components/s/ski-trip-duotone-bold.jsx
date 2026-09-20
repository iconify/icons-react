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
		"content": `<style>.exyd3ub4k {
  d: path("m9 8 6 -6");
}

.hd0l8pb1q {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m2 19 6 -6 3 3 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.icz5z3nxr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 8 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jsuatobfw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 8 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.olx65-bog {
  d: path("m6 8 6 -6");
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tp3wfdbxm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 21h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wt9iv5biz {
  d: path("m2 19 6 -6 3 3 5 -5 5 5");
}
</style><g class="s0phu2bbs"><path class="hd0l8pb1q"/><path class="icz5z3nxr"/><path class="jsuatobfw"/><path class="tp3wfdbxm"/><path class="wt9iv5biz"/><path class="olx65-bog"/><path class="exyd3ub4k"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:ski-trip-duotone-bold",
	});
}

export default Component;
