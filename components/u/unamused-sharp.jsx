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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.cb3bvxiwe {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 8.75h3.5m2.5 0h3.5");
}

.gxspifb3m {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10.75h.01m5.99 0h.01");
}

.ps9ryfu4z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 15.75L14.5 15");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="cb3bvxiwe"/><path class="gxspifb3m"/><path class="ps9ryfu4z"/></g>`,
		"fallback": "iconoven:unamused-sharp",
	});
}

export default Component;
