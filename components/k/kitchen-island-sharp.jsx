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
		"content": `<style>.gn1q4_bxc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h18.5v3.5H2.75zm2 6h14.5v9H4.75v-2Zm7.25 0v9");
}

.jqha4tb8j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 14.75h.01m3.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="gn1q4_bxc"/><path class="jqha4tb8j"/></g>`,
		"fallback": "iconoven:kitchen-island-sharp",
	});
}

export default Component;
