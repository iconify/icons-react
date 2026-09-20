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
		"content": `<style>.bu2gtz1yi {
  d: path("M8.24 11.63a4 4 0 0 1 7.5 0");
}

.d8z1r1beo {
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l7lvdwbxu {
  d: path("M10 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.wzx0dxb2r {
  d: path("m12 2 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="d8z1r1beo"/><path class="wzx0dxb2r"/><path class="bu2gtz1yi"/><path class="l7lvdwbxu"/></g>`,
		"fallback": "iconmind:oversight-loop-outline-thin",
	});
}

export default Component;
