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

.mzrwdcbhu {
  d: path("M3.5 7.5H17l4.5 4.5v3.5a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1");
}

.r9w_mcb7m {
  d: path("M17 7.5V12h4.5M7 7.5v9");
}
</style><g class="hntgybcog"><path class="mzrwdcbhu"/><path class="r9w_mcb7m"/></g>`,
		"fallback": "uix:wax-strip",
	});
}

export default Component;
