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
		"content": `<style>.ckdeowbwc {
  cx: 12px;
  cy: 6px;
  r: 3.25px;
}

.cx77jfbqf {
  d: path("M7.5 21.25h-1v-3.5a5.5 5.5 0 0 1 11 0v3.5h-1Z");
}

.dsd-7lbgn {
  d: path("M6.75 16L4 17l-1-2.5M17.25 16L20 17l1-2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ckdeowbwc"/><path class="cx77jfbqf"/><path class="dsd-7lbgn"/></g>`,
		"fallback": "iconoven:shrug-sharp",
	});
}

export default Component;
