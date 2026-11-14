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

.n00q00bzr {
  d: path("M5 9h11a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 16 20h-3a2.5 2.5 0 0 0-5 0H5a2.5 2.5 0 0 1-2.5-2.5v-6A2.5 2.5 0 0 1 5 9");
}

.s8fa3obus {
  d: path("M5.25 13.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m4.25-8.75a2.5 2.5 0 0 1 2.5 2.5M16.5 2a5.25 5.25 0 0 1 5.25 5.25");
}
</style><g class="hntgybcog"><path class="n00q00bzr"/><path class="s8fa3obus"/></g>`,
		"fallback": "uix:vr-headset-wireless",
	});
}

export default Component;
