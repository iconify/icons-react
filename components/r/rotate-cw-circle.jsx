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

.n2bic0nje {
  d: path("m10 6.25l2 2l-2 2");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.vx09w6baa {
  d: path("M15.897 10.5A4.5 4.5 0 1 1 12 8.25");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="vx09w6baa"/><path class="n2bic0nje"/></g>`,
		"fallback": "uix:rotate-cw-circle",
	});
}

export default Component;
