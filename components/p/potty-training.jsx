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
		"content": `<style>.ar3_hdb6g {
  width: 4.5px;
  height: 8.75px;
  x: 5px;
  y: 3px;
  rx: 1.75px;
}

.h-mw3y8lz {
  d: path("M4.75 11.75h14.5a1 1 0 0 1 1 1c0 3.6-2.9 6.25-6.5 6.25h-3.5c-3.6 0-6.5-2.65-6.5-6.25a1 1 0 0 1 1-1M8 21.25h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="ar3_hdb6g"/><path class="h-mw3y8lz"/></g>`,
		"fallback": "iconoven:potty-training",
	});
}

export default Component;
