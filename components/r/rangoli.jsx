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

.o5_qfnb9e {
  d: path("M16.75 12a1.75 1.75 0 0 1-1.5 3.25a1.75 1.75 0 0 1-3.25 1.5a1.75 1.75 0 0 1-3.25-1.5A1.75 1.75 0 0 1 7.25 12a1.75 1.75 0 0 1 1.5-3.25A1.75 1.75 0 0 1 12 7.25a1.75 1.75 0 0 1 3.25 1.5a1.75 1.75 0 0 1 1.5 3.25M12 12h.01");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="o5_qfnb9e"/></g>`,
		"fallback": "uix:rangoli",
	});
}

export default Component;
