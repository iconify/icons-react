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
		"content": `<style>.eal4v6hsr {
  d: path("M2.5 13L8 7.5l8.5 8.5m-2.25-8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M6 20.5h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lcdib_69v {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V6A3.5 3.5 0 0 1 6 2.5");
}
</style><g class="hntgybcog"><path class="lcdib_69v"/><path class="eal4v6hsr"/></g>`,
		"fallback": "uix:post-alt-text",
	});
}

export default Component;
