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
		"content": `<style>.mjj50mh_g {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.25v-3h4v3m-.75 12h-8.5v-12h14.5v3.5m-10-3.5v12m8-4.5a2.5 2.5 0 1 1 3.5 2.3l-1 .417v.783");
}

.tis8h6dcx {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 20.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="mjj50mh_g"/><path class="tis8h6dcx"/></g>`,
		"fallback": "iconoven:lost-luggage-sharp",
	});
}

export default Component;
