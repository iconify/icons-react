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
		"content": `<style>.flqekybdu {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhc03isln {
  d: path("M2.5 16.5V10H14l4 3h3.5v3.5ZM8 10V6.5h7");
}
</style><g class="hntgybcog"><path class="flqekybdu"/><path class="vhc03isln"/></g>`,
		"fallback": "uix:safari-jeep",
	});
}

export default Component;
