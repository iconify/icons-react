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
		"content": `<style>.a046ttf-b {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0M9.5 2.5h5");
}

.fvv73ib0o {
  d: path("M8.75 13.25L11 15.5l4.25-4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a046ttf-b"/><path class="fvv73ib0o"/></g>`,
		"fallback": "uix:timer-check",
	});
}

export default Component;
