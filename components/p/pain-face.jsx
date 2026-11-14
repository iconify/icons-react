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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.piwt6ubgu {
  d: path("m6.5 8.5l3 1.75l-3 1.75m11-3.5l-3 1.75l3 1.75M8 17l2-1.5l2 1.5l2-1.5l2 1.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="piwt6ubgu"/></g>`,
		"fallback": "uix:pain-face",
	});
}

export default Component;
