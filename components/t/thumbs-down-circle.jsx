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

.ut63-0e7n {
  d: path("m14.5 12.5l-2 3.5c-.5 1-2 .75-1.75-.5l.25-2H8.25A1 1 0 0 1 7 12.25l.75-3.75a1 1 0 0 1 1-1h5.75Zm2.75-4.75v4.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="ut63-0e7n"/></g>`,
		"fallback": "uix:thumbs-down-circle",
	});
}

export default Component;
