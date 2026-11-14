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
		"content": `<style>.l2cbryb0p {
  d: path("m16.75 13l.841.861l1.159-.325l.298 1.166l1.166.298l-.325 1.159l.861.841l-.861.841l.325 1.159l-1.166.298l-.298 1.166l-1.159-.325l-.841.861l-.841-.861l-1.159.325l-.298-1.166L13.286 19l.325-1.159L12.75 17l.861-.841L13.286 15l1.166-.298l.298-1.166l1.159.325Z");
}

.sw3y5xh_r {
  d: path("M11.9 21.5H4.5v-19h15v7.9M8 7h8m-8 4h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sw3y5xh_r"/><path class="l2cbryb0p"/></g>`,
		"fallback": "uix-sharp:patent",
	});
}

export default Component;
