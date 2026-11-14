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

.ri6w-r3yg {
  d: path("m12 12.5l-5.25-5A3 3 0 0 1 12 4.25a3 3 0 0 1 5.25 3.25Zm-6.875 0h13.75a2.625 2.625 0 0 1 2.625 2.625v3.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 18.875v-3.75A2.625 2.625 0 0 1 5.125 12.5");
}

.thvpy0rzw {
  d: path("M10.5 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="ri6w-r3yg"/><path class="thvpy0rzw"/></g>`,
		"fallback": "uix:life-death-benefit",
	});
}

export default Component;
