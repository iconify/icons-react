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

.polw-1gzh {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0m12 5l5 5");
}

.uir3nubrl {
  d: path("m9 8l-2 2.5L9 13m3-5l2 2.5l-2 2.5");
}
</style><g class="hntgybcog"><path class="polw-1gzh"/><path class="uir3nubrl"/></g>`,
		"fallback": "uix:search-code",
	});
}

export default Component;
