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

.i9l6mobaz {
  d: path("M2.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.jjup8i_6j {
  d: path("M6.5 10a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m3.5 0h.01m9.49 4.5a10.5 10.5 0 0 1-5 5m7.25-2.75a13.5 13.5 0 0 1-5 5");
}
</style><g class="hntgybcog"><path class="i9l6mobaz"/><path class="jjup8i_6j"/></g>`,
		"fallback": "uix:shot-tracker",
	});
}

export default Component;
