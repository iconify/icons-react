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
		"content": `<style>.dznv025mt {
  d: path("M6 14h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.taxmbub4q {
  d: path("M6 17h12");
}

.u78lc2bnx {
  d: path("M6 20h12");
}

.woetzacvo {
  d: path("m4 12 8 -8 8 8");
}
</style><g class="hntgybcog"><path class="woetzacvo"/><path class="dznv025mt"/><path class="taxmbub4q"/><path class="u78lc2bnx"/></g>`,
		"fallback": "iconmind:library-outline-thin",
	});
}

export default Component;
