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

.t1i_qqbnx {
  d: path("M8 9v9h13.5M8 9L4 2.5");
}

.wmx_e_0no {
  d: path("M6 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.5-6.5h9m-8.5 0V18m4-4.5V18m4-4.5V18");
}
</style><g class="hntgybcog"><path class="t1i_qqbnx"/><path class="wmx_e_0no"/></g>`,
		"fallback": "uix:pallet-jack",
	});
}

export default Component;
