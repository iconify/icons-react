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
		"content": `<style>.ac32awbtf {
  width: 17.5px;
  height: 15.25px;
  x: 3.25px;
  y: 6px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sifgi0b5q {
  d: path("M8 6V2.75M16 6V2.75M9.25 9.5a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0 3m5.5-9a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0 3");
}
</style><g class="hntgybcog"><rect class="ac32awbtf"/><path class="sifgi0b5q"/></g>`,
		"fallback": "iconoven:transformer-box",
	});
}

export default Component;
