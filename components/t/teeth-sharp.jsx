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
		"content": `<style>.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wbs_q4bxl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h18.5v11.5H2.75zM12 7.75V10m0 4v2.25M2.75 12h18.5");
}

.xjtjf2bvb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 12h.01m8.99 0h.01");
}
</style><g class="ux2u0rbkq"><path class="wbs_q4bxl"/><path class="xjtjf2bvb"/></g>`,
		"fallback": "iconoven:teeth-sharp",
	});
}

export default Component;
