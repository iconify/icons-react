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
		"content": `<style>.b643rsxuq {
  d: path("M2.5 6h19v14h-19ZM7 6l5-3.5L17 6");
}

.m-uiwcbld {
  d: path("m5.5 17l4-5l3.25 3.5L15 13l3.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b643rsxuq"/><path class="m-uiwcbld"/></g>`,
		"fallback": "uix-sharp:wall-art",
	});
}

export default Component;
