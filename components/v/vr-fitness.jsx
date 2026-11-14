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
		"content": `<style>.xawno79lk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v3.5A3.5 3.5 0 0 1 17 13h-2.25L12 10.25L9.25 13H7a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 7 2.5M2 7.75h1.5m17 0H22m-6.375 8.75za1.125 1.125 0 0 1 1.125 1.125v2.75a1.125 1.125 0 0 1-1.125 1.125a1.125 1.125 0 0 1-1.125-1.125v-2.75a1.125 1.125 0 0 1 1.125-1.125m5.25 0zA1.125 1.125 0 0 1 22 17.625v2.75a1.125 1.125 0 0 1-1.125 1.125a1.125 1.125 0 0 1-1.125-1.125v-2.75a1.125 1.125 0 0 1 1.125-1.125M16.75 19h3");
}
</style><path class="xawno79lk"/>`,
		"fallback": "uix:vr-fitness",
	});
}

export default Component;
