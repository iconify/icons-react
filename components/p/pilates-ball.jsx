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
		"content": `<style>.n3sfkyb3t {
  d: path("M3.5 8.5q8.5 6.5 17 0");
}

.p1zobq2vl {
  d: path("M3 11.5a9 9 0 1 0 18 0a9 9 0 1 0-18 0Zm-.5 9h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p1zobq2vl"/><path class="n3sfkyb3t"/></g>`,
		"fallback": "uix-sharp:pilates-ball",
	});
}

export default Component;
