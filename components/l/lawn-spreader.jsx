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
		"content": `<style>.g_8vuo4yo {
  d: path("M7.085 5h7.83a1.75 1.75 0 0 1 1.625 2.4l-1.6 4a1.75 1.75 0 0 1-1.625 1.1h-4.63a1.75 1.75 0 0 1-1.625-1.1l-1.6-4A1.75 1.75 0 0 1 7.085 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ng2a0acgv {
  d: path("M7.25 16.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M4.5 5l-2-2.5M18 14h.01m2.49-3.5h.01M20 18h.01");
}
</style><g class="hntgybcog"><path class="g_8vuo4yo"/><path class="ng2a0acgv"/></g>`,
		"fallback": "uix:lawn-spreader",
	});
}

export default Component;
