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
		"content": `<style>.azrz69bot {
  d: path("M4.25 7.75h15.5v11.5a2 2 0 0 1-2 2H6.25a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rv385tbng {
  width: 18.5px;
  height: 3.5px;
  x: 2.75px;
  y: 4.25px;
  rx: 1.25px;
}

.v0efanbpd {
  width: 6px;
  height: 2.5px;
  x: 9px;
  y: 10.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="rv385tbng"/><path class="azrz69bot"/><rect class="v0efanbpd"/></g>`,
		"fallback": "iconoven:storage-box",
	});
}

export default Component;
