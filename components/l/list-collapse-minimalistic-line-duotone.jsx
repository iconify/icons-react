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
		"content": `<style>.bp9f0acyy {
  d: path("M20 11L12 11");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hrpb3z6mg {
  stroke-linejoin: round;
  d: path("M5.28571 16L7 14L5.28571 12");
}

.i1rjgtlrr {
  d: path("M20 6L12 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ll_t976_m {
  d: path("M20 16H12");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.meafjacfv {
  stroke-linejoin: round;
  d: path("M5.28571 10L7 8L5.28571 6");
}
</style><g class="ipq1z-bjh"><path class="ll_t976_m"/><path class="bp9f0acyy"/><path class="i1rjgtlrr"/><path class="hrpb3z6mg"/><path class="meafjacfv"/></g>`,
		"fallback": "solar:list-collapse-minimalistic-line-duotone",
	});
}

export default Component;
