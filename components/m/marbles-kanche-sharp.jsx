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
		"content": `<style>.fqqvecces {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.1 6.8h.01");
}

.kkrhs2bdf {
  cx: 12px;
  cy: 7.84px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n5jjp8icf {
  cx: 7px;
  cy: 16.5px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ol_gbdb3r {
  cx: 17px;
  cy: 16.5px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="n5jjp8icf"/><circle class="ol_gbdb3r"/><circle class="kkrhs2bdf"/><path class="fqqvecces"/></g>`,
		"fallback": "iconoven:marbles-kanche-sharp",
	});
}

export default Component;
