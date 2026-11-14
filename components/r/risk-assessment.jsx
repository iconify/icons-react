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
		"content": `<style>.cx5aod5of {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3M9 3v18m6-18v18M3 9h18M3 15h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.toiidtbvq {
  fill: currentColor;
  d: path("M15 3h4c1.1 0 2 .9 2 2v4h-6Z");
}
</style><g class="hntgybcog"><path class="cx5aod5of"/><path class="toiidtbvq"/></g>`,
		"fallback": "uix:risk-assessment",
	});
}

export default Component;
