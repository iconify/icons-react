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

.sgpplz4gz {
  d: path("M11 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.va5hwibrn {
  d: path("m12.345 11.345l.31.31a1.5 1.5 0 0 1-.035 2.155l-5.838 5.473a1.46 1.46 0 0 1-2.032-.033a1.46 1.46 0 0 1-.033-2.032l5.473-5.838a1.5 1.5 0 0 1 2.155-.035M11.25 7L17 12.75");
}
</style><g class="hntgybcog"><path class="sgpplz4gz"/><path class="va5hwibrn"/></g>`,
		"fallback": "uix:karaoke",
	});
}

export default Component;
