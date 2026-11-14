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
		"content": `<style>.deyovgb-o {
  d: path("M5.5 18c4.5-.5 9-5.5 14.5-13.5");
}

.dz6y_7g1a {
  fill: currentColor;
  d: path("M7.25 17a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25-5A1.25 1.25 0 1 0 19 8a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l73pdpbsu {
  d: path("M3.5 2.5v18h18");
}

.sqcm0db3y {
  d: path("M7 7h2.5M7 11h2.5");
}
</style><g class="hntgybcog"><path class="l73pdpbsu"/><path class="deyovgb-o"/><path class="dz6y_7g1a"/><path class="sqcm0db3y"/></g>`,
		"fallback": "uix:milestone-chart",
	});
}

export default Component;
