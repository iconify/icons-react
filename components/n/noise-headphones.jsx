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

.iyf9-bmjr {
  d: path("m10 14.5l4 4m0-4l-4 4");
}

.ojncymbaz {
  width: 5px;
  height: 8.5px;
  x: 2.75px;
  y: 12.25px;
  rx: 2.25px;
}

.pdoozcciw {
  d: path("M4.75 13v-2a7.25 7.25 0 0 1 14.5 0v2");
}

.ta63i0b5w {
  width: 5px;
  height: 8.5px;
  x: 16.25px;
  y: 12.25px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><path class="pdoozcciw"/><rect class="ojncymbaz"/><rect class="ta63i0b5w"/><path class="iyf9-bmjr"/></g>`,
		"fallback": "iconoven:noise-headphones",
	});
}

export default Component;
