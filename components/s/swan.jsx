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
		"content": `<style>.b6uygwbqw {
  d: path("M6.48 5.13L3.1 6.4c-.4.15-.35.65.1.6l3.05-1a1.75 1.75 0 0 1 .23-.87");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfp416bgv {
  d: path("M9.75 6a1.75 1.75 0 0 0-3.5 0c.5 3-3 5.5-1 8c-1 1.25-.75 6 4.25 6H15c3 0 5.25-2.5 5.25-5.5q0-2.25-.75-4.5c-2 2.75-5 4-7.75 4h-3c-2-2.5 1.5-5 1-8");
}
</style><g class="hntgybcog"><path class="lfp416bgv"/><path class="b6uygwbqw"/></g>`,
		"fallback": "iconoven:swan",
	});
}

export default Component;
