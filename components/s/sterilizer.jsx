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
		"content": `<style>.cjuglwb5x {
  width: 9px;
  height: 2.25px;
  x: 7.5px;
  y: 5px;
  rx: 1.1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iscs5zxxc {
  d: path("M10 9.5v.75m4-.75v.75m-9.5 2h15m-11.25 4h7.5M7.5 19.5v1.75m9-1.75v1.75");
}

.xhk8qumxf {
  width: 15px;
  height: 16.75px;
  x: 4.5px;
  y: 2.75px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><rect class="xhk8qumxf"/><rect class="cjuglwb5x"/><path class="iscs5zxxc"/></g>`,
		"fallback": "iconoven:sterilizer",
	});
}

export default Component;
