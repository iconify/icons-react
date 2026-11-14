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

.j-5qa0bpe {
  d: path("M2.5 12.5a9.5 7 0 1 0 19 0a9.5 7 0 1 0-19 0M3.75 9h16.5M9.5 5.75V9m5-3.25V9M4.25 16.5h15.5m-9.75 0v2.75m4-2.75v2.75");
}

.reyug-xyv {
  d: path("M8 16.5c0-3.75 8-3.75 8 0");
}
</style><g class="hntgybcog"><path class="j-5qa0bpe"/><path class="reyug-xyv"/></g>`,
		"fallback": "uix:mouth-open",
	});
}

export default Component;
