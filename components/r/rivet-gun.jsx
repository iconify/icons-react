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
		"content": `<style>.css9jebav {
  width: 12.75px;
  height: 4.5px;
  x: 8.5px;
  y: 3.75px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oxylkrhev {
  d: path("m8.01 4.83l-2.02.34q-.49.08-.49.58v.5q0 .5.49.58l2.02.34q.49.08.49-.42v-1.5q0-.5-.49-.42M2.75 6H5.5m9 2.25H16q1 0 1.31.95l3.13 9.6q.31.95-.64 1.27l-1.1.36q-.95.32-1.27-.63L13.82 9.2q-.32-.95.68-.95m-4.25 0l4 12");
}
</style><g class="hntgybcog"><rect class="css9jebav"/><path class="oxylkrhev"/></g>`,
		"fallback": "iconoven:rivet-gun",
	});
}

export default Component;
