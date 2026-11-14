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

.kt3bgd67g {
  d: path("M5.25 14.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M17.75 10a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M18 4a1.25 1.25 0 1 0 2.5 0A1.25 1.25 0 1 0 18 4");
}

.n9uemeb-z {
  d: path("M6 2.5h5.5A3.5 3.5 0 0 1 15 6v12a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18V6A3.5 3.5 0 0 1 6 2.5M2.5 7H15");
}
</style><g class="hntgybcog"><path class="n9uemeb-z"/><path class="kt3bgd67g"/></g>`,
		"fallback": "uix:laundromat",
	});
}

export default Component;
