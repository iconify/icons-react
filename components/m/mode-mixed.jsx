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

.t8xn1_fhh {
  d: path("M11.75 18.25L14 13.5h3.75l1.5 4.75m-1.5-4.75l-.75-3h1.75");
}

.tiq1jjvki {
  d: path("M3.5 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 4.75l-.5 5l-2 6m2-6l2.25 6m2.25-2.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m7.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="tiq1jjvki"/><path class="t8xn1_fhh"/></g>`,
		"fallback": "uix:mode-mixed",
	});
}

export default Component;
