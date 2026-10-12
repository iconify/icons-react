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
		"content": `<style>.gie7himug {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 4.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pgyz0kbxu {
  d: path("M6.25 10.25h11.5m-11 4h10.5v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1ZM10 19l2.5-2.5");
}
</style><g class="hntgybcog"><rect class="gie7himug"/><path class="pgyz0kbxu"/></g>`,
		"fallback": "iconoven:laminator",
	});
}

export default Component;
