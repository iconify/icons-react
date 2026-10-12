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
		"content": `<style>.dzau5wm_d {
  d: path("M5 15.5V12a7 7 0 0 1 14 0v3.5ZM5 13h14m0 0l2.25-1.75M19 13l2.25 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m7zcw-b0r {
  width: 18.5px;
  height: 2.5px;
  x: 2.75px;
  y: 18px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="dzau5wm_d"/><rect class="m7zcw-b0r"/></g>`,
		"fallback": "iconoven:sailor-hat",
	});
}

export default Component;
