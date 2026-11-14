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

.o6e5k7b8u {
  d: path("M12 8.25a4.5 4.5 0 1 1-3.897 2.25");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.s1gutd67h {
  d: path("m14 6.25l-2 2l2 2");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="o6e5k7b8u"/><path class="s1gutd67h"/></g>`,
		"fallback": "uix:rotate-ccw-circle",
	});
}

export default Component;
