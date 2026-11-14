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
		"content": `<style>.azjb_tbif {
  d: path("M7.375 7.5h9.25A4.375 4.375 0 0 1 21 11.875v4.75A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-4.75A4.375 4.375 0 0 1 7.375 7.5M9 2.5l3 5m3-5l-3 5");
}

.dh37rtvuq {
  d: path("M9 14.25q3 3 6 0M9.5 11h.01m4.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="azjb_tbif"/><path class="dh37rtvuq"/></g>`,
		"fallback": "uix:kids-tv",
	});
}

export default Component;
