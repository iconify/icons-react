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

.n6p-2nbyt {
  d: path("M12 2c-1.75 2.25-1.75 4.5 0 6m0 0c2-.5 4 .5 5.25 3M12 8c.25 2.25-2.5 3.5-5.25 3");
}

.w3riiibvs {
  d: path("M6 8a6 6 0 1 0 12 0A6 6 0 1 0 6 8m6 9v4.75m-2.75-2L12 17l2.75 2.75");
}
</style><g class="hntgybcog"><path class="w3riiibvs"/><path class="n6p-2nbyt"/></g>`,
		"fallback": "uix:volleyball-serve",
	});
}

export default Component;
