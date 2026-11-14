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
		"content": `<style>.afp1lybxq {
  d: path("M2.5 10a6 6 0 0 0 12 0m-6 6v4.5m-2.5 0h5m3.75-4a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m4.75 2l1.75 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymwrneb2m {
  d: path("M8.5 2.5za3 3 0 0 1 3 3V10a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3");
}
</style><g class="hntgybcog"><path class="ymwrneb2m"/><path class="afp1lybxq"/></g>`,
		"fallback": "uix:search-voice",
	});
}

export default Component;
