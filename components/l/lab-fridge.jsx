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

.st5_6cb4i {
  d: path("M10.5 13v4a1.5 1.5 0 0 0 3 0v-4");
}

.z-usrvb7g {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5M4.5 10h15m-12-5v2.5");
}
</style><g class="hntgybcog"><path class="z-usrvb7g"/><path class="st5_6cb4i"/></g>`,
		"fallback": "uix:lab-fridge",
	});
}

export default Component;
