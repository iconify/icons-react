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
		"content": `<style>.bndm1jvxx {
  cx: 18.25px;
  cy: 13.25px;
  r: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.fvfnvuhbi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 14v7.25m10-5.25v5.25m-15.5 0h18.5");
}

.q6nvdzbmm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.25 7.25h.01m3.99-.5h.01m-2.01 4h.01");
}

.ss2we_bgy {
  cx: 8.25px;
  cy: 8.5px;
  r: 5.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="ss2we_bgy"/><circle class="bndm1jvxx"/><path class="fvfnvuhbi"/><path class="q6nvdzbmm"/></g>`,
		"fallback": "iconoven:orchard-tree-sharp",
	});
}

export default Component;
