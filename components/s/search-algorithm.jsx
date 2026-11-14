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
		"content": `<style>.a0glw258a {
  d: path("M6.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m9.5 4l2.75 2.75M4.25 17.5h1A1.75 1.75 0 0 1 7 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-.5a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-mi46cti {
  fill: currentColor;
  d: path("M11.5 17.5h1a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-.5a1.75 1.75 0 0 1 1.75-1.75");
}

.ybszs2d2f {
  d: path("M18.75 17.5h1a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="a0glw258a"/><path class="r-mi46cti"/><path class="ybszs2d2f"/></g>`,
		"fallback": "uix:search-algorithm",
	});
}

export default Component;
