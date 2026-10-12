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
		"content": `<style>.a2wuipwmr {
  d: path("M11 20.25H4.75V3.75h9.5l4 4v2.5m-4-6.5v4h4M8 11h4.5");
}

.c1ohgwboi {
  d: path("M21.25 17a4 4 0 1 1-4-4m-1.5-1.5l1.5 1.5l-1.5 1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="a2wuipwmr"/><path class="c1ohgwboi"/></g>`,
		"fallback": "iconoven:revision-sharp",
	});
}

export default Component;
