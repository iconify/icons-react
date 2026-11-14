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
		"content": `<style>.a3yd9yc2l {
  d: path("M2.5 9.75a7.75 3.75 0 1 0 15.5 0a7.75 3.75 0 1 0-15.5 0m3-7H9m2.5 0H15m-9.5 14H9M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a3yd9yc2l"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:meeting-clock",
	});
}

export default Component;
