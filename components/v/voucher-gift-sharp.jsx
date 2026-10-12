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
		"content": `<style>.bm4u5ts5k {
  d: path("M2.75 5.75h18.5v12.5H2.75zm5.5 0v12.5m-5.5-7h18.5");
}

.dmg8vwbsd {
  d: path("M8.25 11.25c-.75-3-3-3.75-3-1.25c0 1.5 1.75 1.25 3 1.25c.75-3 3-3.75 3-1.25c0 1.5-1.75 1.25-3 1.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bm4u5ts5k"/><path class="dmg8vwbsd"/></g>`,
		"fallback": "iconoven:voucher-gift-sharp",
	});
}

export default Component;
