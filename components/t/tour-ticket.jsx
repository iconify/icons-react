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

.ur1t5-hgg {
  d: path("M3 8h18v3a1.5 1.5 0 0 0 0 3v3H3v-3a1.5 1.5 0 0 0 0-3Z");
}

.y2-2kmb6n {
  d: path("M7.5 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M13 11h4m-4 3h3");
}
</style><g class="hntgybcog"><path class="ur1t5-hgg"/><path class="y2-2kmb6n"/></g>`,
		"fallback": "uix:tour-ticket",
	});
}

export default Component;
