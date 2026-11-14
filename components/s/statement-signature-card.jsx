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
		"content": `<style>.fvcmg4cim {
  d: path("M6 12.5c1-3.5 2.5-4 3-2s1 2.25 2 0s2-1.5 2.5.5c.5 1.5 2 1 3.5-.75");
}

.h0_kk_bam {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5M5.5 15.5h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h0_kk_bam"/><path class="fvcmg4cim"/></g>`,
		"fallback": "uix:statement-signature-card",
	});
}

export default Component;
