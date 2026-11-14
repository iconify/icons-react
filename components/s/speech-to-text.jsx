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
		"content": `<style>.d9uft2b5s {
  d: path("M6 4za2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 6 13a2.5 2.5 0 0 1-2.5-2.5v-4A2.5 2.5 0 0 1 6 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u4a6hrbqj {
  d: path("M2 11a4 4 0 0 0 8 0m-4 4v4m7-11h8m-8 4h8m-8 4h5");
}
</style><g class="hntgybcog"><path class="d9uft2b5s"/><path class="u4a6hrbqj"/></g>`,
		"fallback": "uix:speech-to-text",
	});
}

export default Component;
