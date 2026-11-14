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
		"content": `<style>.cjhbo82aw {
  d: path("M18 21V8.5a4.25 4.25 0 0 0-8.5 0v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkjl5qelv {
  d: path("m6 12l3.5 3.5L13 12");
}
</style><g class="hntgybcog"><path class="cjhbo82aw"/><path class="wkjl5qelv"/></g>`,
		"fallback": "uix:lane-arrow-left-u-turn",
	});
}

export default Component;
