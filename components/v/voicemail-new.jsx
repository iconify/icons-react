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

.q8pb9d2-s {
  fill: currentColor;
  d: path("M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.yiziiubgg {
  d: path("M5 3.5h3L9.75 8L7.5 9.75c1.25 2.5 4.25 5.5 6.75 6.75L16 14.25L20.5 16v3a2 2 0 0 1-2 2c-8-.5-15-7.5-15.5-15.5a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="yiziiubgg"/><path class="q8pb9d2-s"/></g>`,
		"fallback": "uix:voicemail-new",
	});
}

export default Component;
