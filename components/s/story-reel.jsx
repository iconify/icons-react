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

.teuoewbyq {
  d: path("M8.5 6.25h2m3 0h2m-4.66 4.88l3.07 1.99q.59.38 0 .76l-3.07 1.99q-.59.38-.59-.32v-4.1q0-.7.59-.32");
}

.upddb4dxn {
  width: 13.5px;
  height: 18.5px;
  x: 5.25px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="upddb4dxn"/><path class="teuoewbyq"/></g>`,
		"fallback": "iconoven:story-reel",
	});
}

export default Component;
