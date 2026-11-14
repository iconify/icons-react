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
		"content": `<style>.e1w6k-b7e {
  d: path("M6 6.5h12a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16v-6A3.5 3.5 0 0 1 6 6.5m3.5 0v-2h5v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.puav5kbyp {
  d: path("M5.25 13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="e1w6k-b7e"/><path class="puav5kbyp"/></g>`,
		"fallback": "uix:stereo-camera",
	});
}

export default Component;
