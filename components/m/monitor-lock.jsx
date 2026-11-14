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

.ns0c7bbfw {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8");
}

.qn1qcy50x {
  d: path("M11.25 10h1.5a1.75 1.75 0 0 1 1.75 1.75V12a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 9.5 12v-.25A1.75 1.75 0 0 1 11.25 10m-.75 0V9a1.5 1.5 0 0 1 3 0v1");
}
</style><g class="hntgybcog"><path class="ns0c7bbfw"/><path class="qn1qcy50x"/></g>`,
		"fallback": "uix:monitor-lock",
	});
}

export default Component;
