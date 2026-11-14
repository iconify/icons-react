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

.oyp1geb0g {
  d: path("M6.5 4h11A3.5 3.5 0 0 1 21 7.5v10.75a3.5 3.5 0 0 1-3.5 3.5h-11a3.5 3.5 0 0 1-3.5-3.5V7.5A3.5 3.5 0 0 1 6.5 4M8 2.5v3m8-3v3");
}

.syfsj4nhm {
  d: path("M8.5 13.75h7a2 2 0 0 0 .25-4A3.5 3.5 0 0 0 9 9.5a2.25 2.25 0 0 0-.5 4.25M9 16.5L8 19m4.5-2.5l-1 2.5m4.5-2.5L15 19");
}
</style><g class="hntgybcog"><path class="oyp1geb0g"/><path class="syfsj4nhm"/></g>`,
		"fallback": "uix:monsoon-season",
	});
}

export default Component;
