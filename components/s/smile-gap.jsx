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

.mkoegcbow {
  d: path("M6 12.5h12a6 6 0 0 1-12 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.sri_h-bzs {
  d: path("M6.75 15.5h3.75v-3m3 0v3h3.75m-8.75-7h.01m6.99 0h.01");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="mkoegcbow"/><path class="sri_h-bzs"/></g>`,
		"fallback": "uix:smile-gap",
	});
}

export default Component;
