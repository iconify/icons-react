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

.y73ekgbip {
  fill: currentColor;
  d: path("M6.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7.25-1.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 15.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="y73ekgbip"/></g>`,
		"fallback": "uix:microbe-plate-colonies",
	});
}

export default Component;
