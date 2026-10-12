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
		"content": `<style>.h2b8jxb_a {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.25 18h.01");
}

.n5ii80f_s {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.75h15.5v18.5H4.25zm3.5 4.5h8.5m-8.5 3.5h8.5m-8.5 3.5h8.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="n5ii80f_s"/><path class="h2b8jxb_a"/></g>`,
		"fallback": "iconoven:nas-sharp",
	});
}

export default Component;
