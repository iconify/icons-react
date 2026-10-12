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
		"content": `<style>.bzxe-4b_x {
  d: path("M7.5 3.5L12 12l4.5-8.5M8.92 15.7L12 12l3.08 3.7");
}

.e6kbp_ktm {
  cx: 17px;
  cy: 18px;
  r: 3px;
}

.pn48gtbgw {
  cx: 7px;
  cy: 18px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bzxe-4b_x"/><circle class="pn48gtbgw"/><circle class="e6kbp_ktm"/></g>`,
		"fallback": "iconoven:scissors-office-sharp",
	});
}

export default Component;
