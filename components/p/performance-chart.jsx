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

.kojp52pvl {
  d: path("M3.5 3v17.5H21m-13-3V14m4.5 3.5V11m4.5 6.5V8.25");
}

.o0qjxdbfp {
  d: path("m7.5 10.75l5-3l6.5-4");
}
</style><g class="hntgybcog"><path class="kojp52pvl"/><path class="o0qjxdbfp"/></g>`,
		"fallback": "uix:performance-chart",
	});
}

export default Component;
