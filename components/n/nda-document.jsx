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
		"content": `<style>.ejosx0b0b {
  width: 8.5px;
  height: 2.5px;
  x: 7.75px;
  y: 5.5px;
  rx: 1px;
}

.ge-6c_bbk {
  d: path("M7.75 11h8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nkn537bap {
  width: 5.5px;
  height: 2.5px;
  x: 7.75px;
  y: 14px;
  rx: 1px;
}

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><rect class="ejosx0b0b"/><path class="ge-6c_bbk"/><rect class="nkn537bap"/></g>`,
		"fallback": "iconoven:nda-document",
	});
}

export default Component;
