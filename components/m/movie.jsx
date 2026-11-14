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

.tly0g4b3y {
  d: path("M10.5 6.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-2 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-2-6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M12 12h.01");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="tly0g4b3y"/></g>`,
		"fallback": "uix:movie",
	});
}

export default Component;
