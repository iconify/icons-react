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
		"content": `<style>.epbzygbbq {
  d: path("m8.98 16.16l3.72-1.19l-2.98-1.19m.9-2.3L8.71 8.07l2.99 1.16m1.2-2.08l3.91-.06l-2.51-2");
}

.m6u7y-evg {
  d: path("M8 21q1.5-10.5 8-18");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m6u7y-evg"/><path class="epbzygbbq"/></g>`,
		"fallback": "iconoven:thorn-sharp",
	});
}

export default Component;
