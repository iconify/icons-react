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
		"content": `<style>.b3muyfg1w {
  d: path("M5.25 18.75c0-9.5 5.5-15 15-15c0 9.5-5.5 15-15 15Zm-1.5 1.5l1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yivwxbbbw {
  d: path("m9.25 7.75l2.5 1L12 12l3.25.25l1 2.5");
}
</style><g class="ulnmmdpxh"><path class="b3muyfg1w"/><path class="yivwxbbbw"/></g>`,
		"fallback": "uix-sharp:leaf-torn",
	});
}

export default Component;
