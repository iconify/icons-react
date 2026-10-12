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
		"content": `<style>.jjcr4pdah {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 10h.01m4.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yxstyjglu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 10.5a6.75 6.75 0 0 1 13.5 0c0 1.75-.5 3-1.5 4H6.75c-1-1-1.5-2.25-1.5-4m2 5.5c-.5 2.25-2 3.75-4 4.25m7-4c0 2.25-.75 3.75-2 5m5.5-5c0 2.25.75 3.75 2 5m1-5.25c.5 2.25 2 3.75 4 4.25");
}
</style><g class="y9tr6bcfx"><path class="yxstyjglu"/><path class="jjcr4pdah"/></g>`,
		"fallback": "iconoven:octopus",
	});
}

export default Component;
