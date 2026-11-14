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
		"content": `<style>.awv_ltz7r {
  d: path("M9.75 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8 17a4 4 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzfrtbyoc {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 3m6 14v4m-3.5 0h7");
}
</style><g class="hntgybcog"><path class="hzfrtbyoc"/><path class="awv_ltz7r"/></g>`,
		"fallback": "uix:meeting-background",
	});
}

export default Component;
