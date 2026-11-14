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

.hx93-dbto {
  d: path("M6.75 7.75za1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5M11 9.5h3.25m2.75 0h4.5");
}

.r-q3libnp {
  d: path("M6 5h1.5A3.5 3.5 0 0 1 11 8.5v7A3.5 3.5 0 0 1 7.5 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5m15.5 0v9");
}
</style><g class="hntgybcog"><path class="r-q3libnp"/><path class="hx93-dbto"/></g>`,
		"fallback": "uix:measure-distance-laser",
	});
}

export default Component;
