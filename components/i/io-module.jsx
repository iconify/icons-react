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
		"content": `<style>.f3anvhbxq {
  d: path("M8.75 10.25L10.5 12l-1.75 1.75M13.5 12h8m-1.75-1.75L21.5 12l-1.75 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzdpwmavs {
  d: path("M9.875 3.5h2.75A4.375 4.375 0 0 1 17 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-2.75A4.375 4.375 0 0 1 5.5 16.125v-8.25A4.375 4.375 0 0 1 9.875 3.5M2.5 12h8");
}
</style><g class="hntgybcog"><path class="wzdpwmavs"/><path class="f3anvhbxq"/></g>`,
		"fallback": "uix:io-module",
	});
}

export default Component;
