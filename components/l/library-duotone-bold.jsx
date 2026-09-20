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
		"content": `<style>.ci4ma8bed {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 12 8 -8 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dznv025mt {
  d: path("M6 14h12");
}

.p04ylgbfu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 20h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qz9_3ub7s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 14h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.taxmbub4q {
  d: path("M6 17h12");
}

.u78lc2bnx {
  d: path("M6 20h12");
}

.vv5wcibip {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 17h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.woetzacvo {
  d: path("m4 12 8 -8 8 8");
}
</style><g class="s0phu2bbs"><path class="ci4ma8bed"/><path class="qz9_3ub7s"/><path class="vv5wcibip"/><path class="p04ylgbfu"/><path class="woetzacvo"/><path class="dznv025mt"/><path class="taxmbub4q"/><path class="u78lc2bnx"/></g>`,
		"fallback": "iconmind:library-duotone-bold",
	});
}

export default Component;
