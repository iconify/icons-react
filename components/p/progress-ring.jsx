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

.q8_cte3_l {
  fill: currentColor;
  d: path("M12 2.5a9.5 9.5 0 0 1 9.5 9.5h-3A6.5 6.5 0 0 0 12 5.5Z");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="q8_cte3_l"/></g>`,
		"fallback": "uix:progress-ring",
	});
}

export default Component;
