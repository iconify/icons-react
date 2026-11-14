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

.izbhmoipm {
  d: path("M2.5 20.5H8V15h5.5V9.5H19V4h2.5");
}

.zgrlzwmil {
  d: path("M5.25 17.75v-5.5h5.5");
}
</style><g class="hntgybcog"><path class="izbhmoipm"/><path class="zgrlzwmil"/></g>`,
		"fallback": "uix:stair-nosing",
	});
}

export default Component;
