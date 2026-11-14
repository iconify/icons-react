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
		"content": `<style>.zb4-kw7ir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h8m-7-3.5h6m-6 0V8m3-3.5V8m3-3.5V8M4 20.5L5 8m4.5 12.5L8.5 8m-6 12.5h19m-9 0l4-8l2.25 3.5l1-1.5l1.75 3");
}
</style><path class="zb4-kw7ir"/>`,
		"fallback": "uix:lookout-point",
	});
}

export default Component;
