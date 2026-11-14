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
		"content": `<style>.pthv0gbbr {
  d: path("M6.75 9.5q0-3 2.25-3");
}

.ttrbk50-b {
  d: path("M7 3.5c-2.5 0-3.5 2-3 5S6 13 6.5 16l1 4c.25 1 1.5 1 1.75 0l1.25-4.5c.25-1 2.75-1 3 0l1.25 4.5c.25 1 1.5 1 1.75 0l1-4c.5-3 2-4.5 2.5-7.5s-.5-5-3-5c-2 0-3 1-5 1s-3-1-5-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ttrbk50-b"/><path class="pthv0gbbr"/></g>`,
		"fallback": "uix-sharp:tooth-enamel",
	});
}

export default Component;
