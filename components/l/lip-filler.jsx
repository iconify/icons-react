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

.me8zfumil {
  d: path("M2.5 8.5C5 4.5 8 3 10 4l2 1.25L14 4c2-1 5 .5 7.5 4.5c-3 4-6 5-9.5 5s-6.5-1-9.5-5");
}

.rougilb2z {
  d: path("M2.5 8.5q9.5 2.5 19 0m-1.379 7.379za1.5 1.5 0 0 1 0 2.121l-1.414 1.414a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121L18 15.879a1.5 1.5 0 0 1 2.121 0m0 0l1.415-1.415m-4.95 4.95l-1.061 1.061m-.884-.884l1.768 1.768");
}
</style><g class="hntgybcog"><path class="me8zfumil"/><path class="rougilb2z"/></g>`,
		"fallback": "uix:lip-filler",
	});
}

export default Component;
