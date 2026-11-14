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

.r8qf4sb9p {
  d: path("M12 2.5c-.25 5 4.5 9.25 9.5 9.5m-19 0c5 .25 9.25 4.5 9.5 9.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="r8qf4sb9p"/></g>`,
		"fallback": "uix:tennis-ball",
	});
}

export default Component;
