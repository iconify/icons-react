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
		"content": `<style>.eam0eacoq {
  d: path("m11.75 11.5l2 2l3.5-3.75");
}

.ey6gor3ga {
  width: 11.5px;
  height: 8px;
  x: 8.75px;
  y: 7.5px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.usu01rliy {
  d: path("M5.25 21.25V2.75m0 2.25h14M2.75 21.25h5M10.25 5v2.5m7-2.5v2.5");
}
</style><g class="hntgybcog"><path class="usu01rliy"/><rect class="ey6gor3ga"/><path class="eam0eacoq"/></g>`,
		"fallback": "iconoven:sold-sign",
	});
}

export default Component;
