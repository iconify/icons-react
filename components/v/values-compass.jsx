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

.xxcfx35rt {
  d: path("m13.352 8.057l1.585 3.292a1.5 1.5 0 0 1 0 1.302l-1.585 3.292a1.5 1.5 0 0 1-2.704 0l-1.585-3.292a1.5 1.5 0 0 1 0-1.302l1.585-3.292a1.5 1.5 0 0 1 2.704 0M12 12h.01");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="xxcfx35rt"/></g>`,
		"fallback": "uix:values-compass",
	});
}

export default Component;
