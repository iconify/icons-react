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

.iwj8rd4ih {
  d: path("m16.75 18.25l-2 1.75l2 1.5m-9.5-19l2 1.5l-2 1.5");
}

.llv4qgaxq {
  d: path("M14.907 4.013a8.5 8.5 0 0 1 0 15.974m-5.814 0a8.5 8.5 0 0 1 0-15.974");
}

.r60n7cbww {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4-1.25v2.5");
}
</style><g class="hntgybcog"><path class="r60n7cbww"/><path class="llv4qgaxq"/><path class="iwj8rd4ih"/></g>`,
		"fallback": "uix:pay-period",
	});
}

export default Component;
