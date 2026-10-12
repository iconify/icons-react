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
		"content": `<style>.ctt9_pbte {
  d: path("m16.61 9.74l3.78-2.23q.86-.51.86.49v8q0 1-.86.49l-3.78-2.23q-.86-.51-.86-1.51v-1.5q0-1 .86-1.51");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zj2jvpbmh {
  width: 13px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="zj2jvpbmh"/><path class="ctt9_pbte"/></g>`,
		"fallback": "iconoven:video-settings",
	});
}

export default Component;
