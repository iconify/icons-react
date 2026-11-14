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
		"content": `<style>.a-59tcjtb {
  d: path("M13 21H3V4.5h17v7.7M3 9h17M7.5 2.5V6m8-3.5V6");
}

.t6t8468xn {
  d: path("M18 15a3 3 0 1 0 3 3a3 3 0 0 1-3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a-59tcjtb"/><path class="t6t8468xn"/></g>`,
		"fallback": "uix-sharp:sleep-schedule",
	});
}

export default Component;
