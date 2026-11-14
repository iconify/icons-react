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
		"content": `<style>.hbsd9b23u {
  fill: currentColor;
  d: path("M14 3.25a9 9 0 1 0 0 17.5a9 9 0 0 1 0-17.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7qjn6psg {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}
</style><g class="hntgybcog"><path class="j7qjn6psg"/><path class="hbsd9b23u"/></g>`,
		"fallback": "uix:moon-waning",
	});
}

export default Component;
