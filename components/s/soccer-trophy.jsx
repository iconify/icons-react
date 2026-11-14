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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yb_llpbyl {
  d: path("M7 5H4.5c0 4 1.5 5.5 3.25 6.5M17 5h2.5c0 4-1.5 5.5-3.25 6.5");
}

.yyr_egbab {
  d: path("M7 3.5h10V9A5 5 0 0 1 7 9ZM12 14v3.5m-4 0h8V21H8Z");
}
</style><g class="ulnmmdpxh"><path class="yyr_egbab"/><path class="yb_llpbyl"/></g>`,
		"fallback": "uix-sharp:soccer-trophy",
	});
}

export default Component;
