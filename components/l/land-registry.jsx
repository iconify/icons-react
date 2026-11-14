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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ibdmb-bqs {
  d: path("M4.5 19.25V5A2.5 2.5 0 0 1 7 2.5h12.5V17H6.75a2.25 2.25 0 0 0 0 4.5H19.5");
}

.p2ykqj2qu {
  d: path("M8 6.75V5h1.75m4.5 0H16v1.75m0 4.5V13h-1.75m-4.5 0H8v-1.75m2.25-.25V7m0 0l3.25 1l-3.25 1");
}
</style><g class="hntgybcog"><path class="ibdmb-bqs"/><path class="p2ykqj2qu"/></g>`,
		"fallback": "uix:land-registry",
	});
}

export default Component;
