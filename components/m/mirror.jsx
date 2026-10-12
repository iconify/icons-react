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

.o_nrn_b7n {
  width: 12.5px;
  height: 15.5px;
  x: 5.75px;
  y: 2.75px;
  rx: 6.25px;
}

.ydmnjbhla {
  d: path("m9.25 9.25l3-3m-2.5 6.5l5-5M12 18.25v3m-3.5 0h7");
}
</style><g class="hntgybcog"><rect class="o_nrn_b7n"/><path class="ydmnjbhla"/></g>`,
		"fallback": "iconoven:mirror",
	});
}

export default Component;
