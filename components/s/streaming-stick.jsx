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
		"content": `<style>.hfzgowbvg {
  width: 5.5px;
  height: 4px;
  x: 15.75px;
  y: 10px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l7oftfa0v {
  width: 13px;
  height: 7px;
  x: 2.75px;
  y: 8.5px;
  rx: 2px;
}

.ngw2utd1a {
  d: path("M7.75 10.25v3.5l3-1.75Z");
}
</style><g class="hntgybcog"><rect class="l7oftfa0v"/><path class="ngw2utd1a"/><rect class="hfzgowbvg"/></g>`,
		"fallback": "iconoven:streaming-stick",
	});
}

export default Component;
