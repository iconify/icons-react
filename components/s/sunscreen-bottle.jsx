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
		"content": `<style>.a29flwbse {
  width: 5.5px;
  height: 2.75px;
  x: 9.25px;
  y: 18.5px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n4x6lxblj {
  d: path("M13.75 10a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 1 1 3.5 0");
}

.zu_yw3fwo {
  d: path("M7.25 3.75h9.5q1 0 .83.99l-1.66 9.77q-.17.99-1.17.99h-5.5q-1 0-1.17-.99L6.42 4.74q-.17-.99.83-.99");
}
</style><g class="hntgybcog"><path class="zu_yw3fwo"/><rect class="a29flwbse"/><path class="n4x6lxblj"/></g>`,
		"fallback": "iconoven:sunscreen-bottle",
	});
}

export default Component;
