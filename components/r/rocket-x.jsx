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

.j1hnyjv5o {
  d: path("M6 11.5L3 15v3l3-2m6-4.5l1.6 1.921M9 18.75v2.75m6.5-6l5 5m0-5l-5 5");
}

.z9m2ndcht {
  d: path("M9 2.5C12.5 5 13 10 12 16H6C5 10 5.5 5 9 2.5");
}
</style><g class="hntgybcog"><path class="z9m2ndcht"/><path class="j1hnyjv5o"/></g>`,
		"fallback": "uix:rocket-x",
	});
}

export default Component;
