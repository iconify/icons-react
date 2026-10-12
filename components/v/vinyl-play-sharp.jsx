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
		"content": `<style>.gmiy96biu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 10.5a5.25 5.25 0 0 1 5.25-5.25m-.91 10.42a5.25 5.25 0 0 1-2.8-1.46");
}

.ic-jxd84h {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.5 10.5h.01");
}

.k7mg9plvr {
  cx: 10.5px;
  cy: 10.5px;
  r: 7.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.titpeqb_n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.62 14.49l4.76 2.65l.87.49l-.87.48l-4.76 2.65l-.87.49V14z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="k7mg9plvr"/><path class="gmiy96biu"/><path class="ic-jxd84h"/><path class="titpeqb_n"/></g>`,
		"fallback": "iconoven:vinyl-play-sharp",
	});
}

export default Component;
