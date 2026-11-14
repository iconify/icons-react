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
		"content": `<style>.brt4pwb8f {
  d: path("M4 9.5v12h11v-12m6.5 12l-4-13m.5 13l-4-13m3 3.5h3.5M18 15.5h3.5M19.25 19H22");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pn931ibvx {
  d: path("m2.5 11l7-7l7 7");
}
</style><g class="hntgybcog"><path class="pn931ibvx"/><path class="brt4pwb8f"/></g>`,
		"fallback": "uix:roof-inspection",
	});
}

export default Component;
