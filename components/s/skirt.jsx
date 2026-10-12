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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t8cix6x3t {
  d: path("M8 8.75h8q1.5 0 1.9 1.45l2.45 8.85q.4 1.45-1.1 1.45H4.75q-1.5 0-1.1-1.45L6.1 10.2Q6.5 8.75 8 8.75m2 .5L8.8 20M14 9.25L15.2 20");
}

.xrhq07b1b {
  width: 11px;
  height: 3px;
  x: 6.5px;
  y: 2.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="xrhq07b1b"/><path class="t8cix6x3t"/></g>`,
		"fallback": "iconoven:skirt",
	});
}

export default Component;
