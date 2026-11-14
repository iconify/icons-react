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
		"content": `<style>.h9sp8cbta {
  d: path("M8 13.5L10.5 7l2.5 6.5m-4.25-2h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.polw-1gzh {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0m12 5l5 5");
}
</style><g class="hntgybcog"><path class="polw-1gzh"/><path class="h9sp8cbta"/></g>`,
		"fallback": "uix:magnifier-text",
	});
}

export default Component;
