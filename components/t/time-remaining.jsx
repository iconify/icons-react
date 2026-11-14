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

.q6ik3yb6i {
  d: path("M12 12V5.5a6.5 6.5 0 1 0 6.5 6.5Z");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="q6ik3yb6i"/></g>`,
		"fallback": "uix:time-remaining",
	});
}

export default Component;
