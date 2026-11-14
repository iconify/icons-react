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
		"content": `<style>.hjuxt0nir {
  d: path("m14.5 4l3.25 2.5L14 11.75l-.5 5c-2.75.5-6.75-2.5-7.5-5l4.75-2.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wjfoocc9r {
  d: path("M16 5.25c.5-.75 1.75-.75 3 .25l2.5 1.75m-17 7.5C5.75 17.25 8.25 19 11 19.5m-8-2c1.25 2 3.25 3.5 5.5 4");
}
</style><g class="hntgybcog"><path class="hjuxt0nir"/><path class="wjfoocc9r"/></g>`,
		"fallback": "uix:ultrasound-probe",
	});
}

export default Component;
