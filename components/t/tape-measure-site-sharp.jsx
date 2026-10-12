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
		"content": `<style>.akn_-_7xz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 10.75h.01");
}

.lhmo7ebvp {
  cx: 9.75px;
  cy: 10.75px;
  r: 7px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qng9iv8dy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 17.75h11.5v2.5M13 17.75v1.5m3-1.5v1.5m3-1.5v1.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.z8ukcsdvv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 10.75L13 7.5");
}
</style><g class="ux2u0rbkq"><circle class="lhmo7ebvp"/><path class="z8ukcsdvv"/><path class="akn_-_7xz"/><path class="qng9iv8dy"/></g>`,
		"fallback": "iconoven:tape-measure-site-sharp",
	});
}

export default Component;
