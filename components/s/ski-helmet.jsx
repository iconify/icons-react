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
		"content": `<style>.elv-wibvt {
  d: path("M4 18v-4.5a8 8 0 0 1 16 0V18h-3.5v-2.5h-9V18Z");
}

.h8jx8ylsg {
  d: path("M7 8.5h10V12H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="elv-wibvt"/><path class="h8jx8ylsg"/></g>`,
		"fallback": "uix-sharp:ski-helmet",
	});
}

export default Component;
