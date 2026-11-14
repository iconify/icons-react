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
		"content": `<style>.dlfgasjxk {
  fill: currentColor;
  d: path("M10 12.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.j8cryjb8o {
  d: path("M11.8 19H2.5V4.5h19v7.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9maskbzf {
  d: path("m3.5 6l8.5 6.25L20.5 6");
}
</style><g class="ulnmmdpxh"><path class="j8cryjb8o"/><path class="x9maskbzf"/><path class="dlfgasjxk"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:mortgage-pre-approval",
	});
}

export default Component;
