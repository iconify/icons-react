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
		"content": `<style>.a6lj2ccce {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-4 15V17c0-2.75 3.25-4.25 7.5-4.25s7.5 1.5 7.5 4.25v4.5");
}

.gisuy9guu {
  d: path("M8.75 15.75h6.5A1.75 1.75 0 0 1 17 17.5a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 7 17.5a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a6lj2ccce"/><path class="gisuy9guu"/></g>`,
		"fallback": "uix:person-arms-crossed",
	});
}

export default Component;
