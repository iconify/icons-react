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
		"content": `<style>.a-d731ccj {
  d: path("M20 6L12 6");
}

.hrpb3z6mg {
  stroke-linejoin: round;
  d: path("M5.28571 16L7 14L5.28571 12");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l7y12ieah {
  d: path("M20 16H12");
}

.meafjacfv {
  stroke-linejoin: round;
  d: path("M5.28571 10L7 8L5.28571 6");
}

.v8tx6ieir {
  d: path("M20 11L12 11");
}
</style><g class="ipq1z-bjh"><path class="l7y12ieah"/><path class="v8tx6ieir"/><path class="a-d731ccj"/><path class="hrpb3z6mg"/><path class="meafjacfv"/></g>`,
		"fallback": "solar:list-collapse-minimalistic-linear",
	});
}

export default Component;
