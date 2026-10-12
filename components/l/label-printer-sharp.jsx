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
		"content": `<style>.bebombs_y {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.75 17.25h.01");
}

.sx9a0ebmf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 9.25v-6.5h9.5v6.5M9.75 6h4.5M2.75 9.25h18.5v12H2.75zM6.25 13h11.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="sx9a0ebmf"/><path class="bebombs_y"/></g>`,
		"fallback": "iconoven:label-printer-sharp",
	});
}

export default Component;
