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
		"content": `<style>.ebpeweb_r {
  d: path("M15 8.75C14.5 7.5 13.5 7 12 7c-2 0-3.25 1-3.25 2.5c0 3 6.5 2 6.5 5C15.25 16 14 17 12 17c-1.5 0-2.75-.5-3.25-1.75M12 2.5v1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="ebpeweb_r"/></g>`,
		"fallback": "uix:mode-shutter-priority",
	});
}

export default Component;
