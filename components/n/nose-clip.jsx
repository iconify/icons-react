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
		"content": `<style>.bufljut-t {
  d: path("M7 18a1.75 2.75 0 1 0 3.5 0A1.75 2.75 0 1 0 7 18m6.5 0a1.75 2.75 0 1 0 3.5 0a1.75 2.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pdk93gbge {
  d: path("M8.75 15.25C6 12 5.5 4.5 12 4.5s6 7.5 3.25 10.75");
}
</style><g class="hntgybcog"><path class="pdk93gbge"/><path class="bufljut-t"/></g>`,
		"fallback": "uix:nose-clip",
	});
}

export default Component;
