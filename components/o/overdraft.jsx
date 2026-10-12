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

.ijs0p36kx {
  d: path("M2.75 12h18.5");
}

.kf6usrblm {
  width: 5px;
  height: 4.25px;
  x: 4.25px;
  y: 4.75px;
  rx: 1px;
}

.owi0voakq {
  width: 5px;
  height: 6.25px;
  x: 14.75px;
  y: 15px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="kf6usrblm"/><path class="ijs0p36kx"/><rect class="owi0voakq"/></g>`,
		"fallback": "iconoven:overdraft",
	});
}

export default Component;
