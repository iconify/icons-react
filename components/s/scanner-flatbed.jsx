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
		"content": `<style>.cb5jl7bbd {
  width: 18.5px;
  height: 9px;
  x: 2.75px;
  y: 11.25px;
  rx: 2.5px;
}

.dk0px4bmn {
  d: path("M4.25 11.25L15.75 3m-9.5 12h11.5m-2.25 2.5h2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="cb5jl7bbd"/><path class="dk0px4bmn"/></g>`,
		"fallback": "iconoven:scanner-flatbed",
	});
}

export default Component;
