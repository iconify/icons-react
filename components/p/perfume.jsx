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
		"content": `<style>.fdzopy_ay {
  width: 6.5px;
  height: 3px;
  x: 8.75px;
  y: 4.25px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j1oksfgqz {
  width: 16.5px;
  height: 11.5px;
  x: 3.75px;
  y: 9.75px;
  rx: 3.5px;
}

.wyvjocxcu {
  d: path("M15.25 5.75h3");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="hntgybcog"><rect class="fdzopy_ay"/><path class="wyvjocxcu"/><rect class="j1oksfgqz"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconoven:perfume",
	});
}

export default Component;
