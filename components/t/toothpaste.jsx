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
		"content": `<style>.g0-n62b0y {
  d: path("m2.5 4.5l10 1l2.5 2v3l-2.5 2l-10 1ZM16.75 7za1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 16.75 11A1.75 1.75 0 0 1 15 9.25v-.5A1.75 1.75 0 0 1 16.75 7M5 4.75v8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lsg4qfbit {
  d: path("M18.5 9c3 0 3.25 4.5 0 5.5c-3 1-4 4.5-1 5h3");
}
</style><g class="hntgybcog"><path class="g0-n62b0y"/><path class="lsg4qfbit"/></g>`,
		"fallback": "uix:toothpaste",
	});
}

export default Component;
