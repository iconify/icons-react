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

.y2gp4gbin {
  d: path("M8.5 11.25a2 2.75 0 1 0 4 0a2 2.75 0 1 0-4 0m-.75-1.5l1 .75m4.5-.75l-1 .75m-4.5 3l1-.75m4.5.75l-1-.75");
}
</style><g class="hntgybcog"><path class="polw-1gzh"/><path class="y2gp4gbin"/></g>`,
		"fallback": "uix:threat-hunting",
	});
}

export default Component;
