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

.kumjsh12m {
  d: path("M4.5 2.5v19M6 3.5h12A1.5 1.5 0 0 1 19.5 5v7a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 12V5A1.5 1.5 0 0 1 6 3.5");
}

.quz52mble {
  fill: currentColor;
  d: path("M6 3.5h2A1.5 1.5 0 0 1 9.5 5v2A1.5 1.5 0 0 1 8 8.5H6A1.5 1.5 0 0 1 4.5 7V5A1.5 1.5 0 0 1 6 3.5m10 0h2A1.5 1.5 0 0 1 19.5 5v2A1.5 1.5 0 0 1 18 8.5h-2A1.5 1.5 0 0 1 14.5 7V5A1.5 1.5 0 0 1 16 3.5m-5 5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 12v-2A1.5 1.5 0 0 1 11 8.5");
}
</style><g class="hntgybcog"><path class="kumjsh12m"/><path class="quz52mble"/></g>`,
		"fallback": "uix:pin-racetrack",
	});
}

export default Component;
