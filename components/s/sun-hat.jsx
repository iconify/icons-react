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
		"content": `<style>.akvfs44ao {
  d: path("M6 12c0-5 2.5-7 6-7s6 2 6 7Z");
}

.fjsxucbjo {
  d: path("M2.5 13a9.5 3 0 1 0 19 0a9.5 3 0 1 0-19 0M6 10h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="akvfs44ao"/><path class="fjsxucbjo"/></g>`,
		"fallback": "uix:sun-hat",
	});
}

export default Component;
