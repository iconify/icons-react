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
		"content": `<style>.bxw3x8z5x {
  d: path("M2.75 3.75h12.5v6.75c0 1.5 1 2 1 4.25a6.5 6.5 0 0 1-6.5 6.5a6.5 6.5 0 0 1-6.5-6.5c0-3.5 2-4.75 2-6.25c0-2-1-3.25-2.5-4.75Z");
}

.co41tqb0k {
  d: path("M15.25 5H20v5.5h-4.75M6 14.5l1.875-1.125L9.75 14.5l1.875 1.125L13.5 14.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bxw3x8z5x"/><path class="co41tqb0k"/></g>`,
		"fallback": "iconoven:pitcher-sharp",
	});
}

export default Component;
