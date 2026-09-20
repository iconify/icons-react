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
		"content": `<style>.gy18-zqeb {
  d: path("M14 19h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0c1235en {
  d: path("m4 5 7 7 -7 7");
}
</style><g class="hntgybcog"><path class="y0c1235en"/><path class="gy18-zqeb"/></g>`,
		"fallback": "iconmind:shell-outline-thin",
	});
}

export default Component;
