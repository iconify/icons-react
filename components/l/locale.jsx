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
		"content": `<style>.rkgcpbk4s {
  d: path("M6.5 9.25a2.75 6.75 0 1 0 5.5 0a2.75 6.75 0 1 0-5.5 0Zm-4 0H16m2.5 12.5s-2.5-2-2.5-4a2.5 2.5 0 0 1 5 0c0 2-2.5 4-2.5 4Z");
}

.txncksb1k {
  d: path("M2.5 9.25a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 1 0-13.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="txncksb1k"/><path class="rkgcpbk4s"/></g>`,
		"fallback": "uix-sharp:locale",
	});
}

export default Component;
