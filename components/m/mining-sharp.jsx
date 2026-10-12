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
		"content": `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhptglb4e {
  cx: 17px;
  cy: 17px;
  r: 3.75px;
}

.xpyqm6bbs {
  d: path("m7.3 19.69l8.24-13.12M9.5 4.25Q19.93-.42 20.25 11Q16.2 5.51 9.5 4.25Z");
}
</style><g class="x2cwu0gfd"><path class="xpyqm6bbs"/><circle class="xhptglb4e"/></g>`,
		"fallback": "iconoven:mining-sharp",
	});
}

export default Component;
