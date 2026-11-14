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
		"content": `<style>.elu_2vbpg {
  d: path("m8 13l4-7.25L16 13m-6.5-2.5h5m-9.75 8h14.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 19.25 21H4.75a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpl5w5pof {
  d: path("M7 3h10a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 17 16H7a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 7 3");
}
</style><g class="hntgybcog"><path class="mpl5w5pof"/><path class="elu_2vbpg"/></g>`,
		"fallback": "uix:text-color-fill",
	});
}

export default Component;
