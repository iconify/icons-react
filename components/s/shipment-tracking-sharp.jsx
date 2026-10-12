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
		"content": `<style>.fxhu6xblw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 7h.01");
}

.lsn2tqqve {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 10h.01M8.5 7.75h.01M10.5 6.5h.01");
}

.nq3jbzb2t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25h8v8h-8zm4 0v2.5");
}

.r4v670b0y {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 2.75A4.25 4.25 0 0 1 21.25 7c0 3.1-4.25 6.75-4.25 6.75S12.75 10.1 12.75 7A4.25 4.25 0 0 1 17 2.75Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="nq3jbzb2t"/><path class="lsn2tqqve"/><path class="r4v670b0y"/><path class="fxhu6xblw"/></g>`,
		"fallback": "iconoven:shipment-tracking-sharp",
	});
}

export default Component;
