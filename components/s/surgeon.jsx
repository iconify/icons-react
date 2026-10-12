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
		"content": `<style>.fozegjbod {
  d: path("M3.75 14a8.25 8.25 0 0 1 16.5 0Z");
}

.gvwhxzhvh {
  width: 18.5px;
  height: 3.5px;
  x: 2.75px;
  y: 14px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hypm05b6k {
  d: path("m16.5 17.5l1.5 3.75m-3.75-3.75l.25 3.75");
}

.r_qr4o6cw {
  d: path("M9 7.5c.5 2 .75 4 .75 6.5M15 7.5c-.5 2-.75 4-.75 6.5");
}
</style><g class="hntgybcog"><path class="fozegjbod"/><path class="r_qr4o6cw"/><rect class="gvwhxzhvh"/><path class="hypm05b6k"/></g>`,
		"fallback": "iconoven:surgeon",
	});
}

export default Component;
