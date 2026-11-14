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
		"content": `<style>.esjpohbje {
  d: path("M6.5 3.5h-3v17h3m11-17h3v17h-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p0c860bsy {
  fill: currentColor;
  d: path("M7 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="esjpohbje"/><path class="p0c860bsy"/></g>`,
		"fallback": "uix:spread-operator",
	});
}

export default Component;
