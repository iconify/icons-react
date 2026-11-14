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

.nai0iisvw {
  d: path("M7 4h6.5A3.5 3.5 0 0 1 17 7.5V18a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V7.5A3.5 3.5 0 0 1 7 4m0 7h4.5M7 15h6");
}

.ppjc0mbvu {
  d: path("M14.25 12.5V4.75a2.75 2.75 0 0 1 5.5 0V15.5");
}
</style><g class="hntgybcog"><path class="nai0iisvw"/><path class="ppjc0mbvu"/></g>`,
		"fallback": "uix:invoice-attachment",
	});
}

export default Component;
