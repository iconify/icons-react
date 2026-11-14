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
		"content": `<style>.nahqgbibw {
  d: path("M10.646 9.232L17.01 4.99l-4.242 6.364ZM18.5 8.5s2 2.5 2 3.5a2 2 0 0 1-4 0c0-1 2-3.5 2-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5tir4bla {
  d: path("m10.646 9.232l2.122 2.122l-7.778 7.778l-2.122-2.122Z");
}
</style><g class="ulnmmdpxh"><path class="x5tir4bla"/><path class="nahqgbibw"/></g>`,
		"fallback": "uix-sharp:nail-art-brush",
	});
}

export default Component;
