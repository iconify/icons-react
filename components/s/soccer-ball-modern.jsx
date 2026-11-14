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

.rpllbee4n {
  d: path("m12.865 8.111l2.515 1.775a1.5 1.5 0 0 1 .578 1.638l-.897 3.138a1.5 1.5 0 0 1-1.442 1.088h-3.238a1.5 1.5 0 0 1-1.442-1.088l-.897-3.138a1.5 1.5 0 0 1 .578-1.638l2.515-1.775a1.5 1.5 0 0 1 1.73 0M12 7.5v-5m4.25 8L21 9m-6.25 6.75l2.75 4m-8.25-4l-2.75 4m1.25-9.25L3 9");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="rpllbee4n"/></g>`,
		"fallback": "uix:soccer-ball-modern",
	});
}

export default Component;
