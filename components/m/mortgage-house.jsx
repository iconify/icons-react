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

.roxtr_j3z {
  d: path("M7.75 12.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6 5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.ry2s7mg4v {
  d: path("m4.598 9.977l6.25-5.469a1.75 1.75 0 0 1 2.304 0l6.25 5.469A1.75 1.75 0 0 1 20 11.294v7.456a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 18.75v-7.456a1.75 1.75 0 0 1 .598-1.317M16 7V4h2v4.75M9 18l6-6.5");
}
</style><g class="hntgybcog"><path class="ry2s7mg4v"/><path class="roxtr_j3z"/></g>`,
		"fallback": "uix:mortgage-house",
	});
}

export default Component;
