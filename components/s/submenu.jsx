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
		"content": `<style>.dt7alwbag {
  d: path("M10.2 16.5H2.5v-14h13v8.7M5.25 6H8.5M5.25 9.5H8.5M5.25 13H8.5");
}

.leuncbb1o {
  d: path("m11 7.75l1.75 1.75L11 11.25M13 14h8.5v7.5H13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dt7alwbag"/><path class="leuncbb1o"/></g>`,
		"fallback": "uix-sharp:submenu",
	});
}

export default Component;
