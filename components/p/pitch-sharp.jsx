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
		"content": `<style>.epmedibrd {
  d: path("m13 9l2.25-2.25l1.5 1.5L19 6M8.25 16l4.25-2.5");
}

.l1hjccb9d {
  cx: 5.75px;
  cy: 11.25px;
  r: 2px;
}

.ps6j57bjq {
  d: path("M3.5 21.25h5.25v-3a3 3 0 0 0-6 0v3zm6.75-18.5h11v9h-11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="l1hjccb9d"/><path class="ps6j57bjq"/><path class="epmedibrd"/></g>`,
		"fallback": "iconoven:pitch-sharp",
	});
}

export default Component;
