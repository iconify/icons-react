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
		"content": `<style>.h3tsw9m3b {
  d: path("M11.042 21.5H2.5v-10l5-5l5 5v8.058m0-9.558l4-4.5L21 10v1.015");
}

.iahexwbka {
  d: path("M6 21.5v-5h3v5M15 10h3m-3.25 11.25l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h3tsw9m3b"/><path class="iahexwbka"/></g>`,
		"fallback": "uix-sharp:outlet-village",
	});
}

export default Component;
