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

.jjctxebyq {
  d: path("M9 5.5h6a6.5 6.5 0 0 1 6.5 6.5a6.5 6.5 0 0 1-6.5 6.5H9A6.5 6.5 0 0 1 2.5 12A6.5 6.5 0 0 1 9 5.5");
}

.w4eqzub8w {
  d: path("M9 8.75h6A3.25 3.25 0 0 1 18.25 12A3.25 3.25 0 0 1 15 15.25H9A3.25 3.25 0 0 1 5.75 12A3.25 3.25 0 0 1 9 8.75");
}
</style><g class="hntgybcog"><path class="jjctxebyq"/><path class="w4eqzub8w"/></g>`,
		"fallback": "uix:speed-skating-oval",
	});
}

export default Component;
