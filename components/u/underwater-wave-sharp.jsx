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
		"content": `<style>.dpz2kmopt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 17.5h.01M15 20h.01");
}

.pcbp2tbxx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 8l2.313-1.5L7.375 8l2.313 1.5L12 8l2.313-1.5L16.625 8l2.313 1.5L21.25 8m-18.5 4.5L5.063 11l2.312 1.5L9.688 14L12 12.5l2.313-1.5l2.312 1.5l2.313 1.5l2.312-1.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pcbp2tbxx"/><path class="dpz2kmopt"/></g>`,
		"fallback": "iconoven:underwater-wave-sharp",
	});
}

export default Component;
