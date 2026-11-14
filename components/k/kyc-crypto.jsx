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

.poz_fvbbz {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5");
}

.t1qb26b0k {
  d: path("m8.75 8.183l.232.134a1.5 1.5 0 0 1 .75 1.299v.268a1.5 1.5 0 0 1-.75 1.299l-.232.134a1.5 1.5 0 0 1-1.5 0l-.232-.134a1.5 1.5 0 0 1-.75-1.299v-.268a1.5 1.5 0 0 1 .75-1.299l.232-.134a1.5 1.5 0 0 1 1.5 0m-3.5 7.567c0-1.5 1.25-2.5 2.75-2.5s2.75 1 2.75 2.5M13.5 10h5m-5 3.5H17");
}
</style><g class="hntgybcog"><path class="poz_fvbbz"/><path class="t1qb26b0k"/></g>`,
		"fallback": "uix:kyc-crypto",
	});
}

export default Component;
