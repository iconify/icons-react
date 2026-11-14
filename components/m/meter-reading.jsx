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
		"content": `<style>.kodrrsbvl {
  d: path("M11.7 21H3V3h18v9.6");
}

.pxl_z7oip {
  d: path("M6 6.5h12V12H6Zm4 0V12m4-5.5V12m.5 9.5v-2l4.75-4.75l2 2l-4.75 4.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kodrrsbvl"/><path class="pxl_z7oip"/></g>`,
		"fallback": "uix-sharp:meter-reading",
	});
}

export default Component;
