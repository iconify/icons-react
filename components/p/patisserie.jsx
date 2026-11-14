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

.k5f3nnb5e {
  fill: currentColor;
  d: path("M14 6.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.u-rh33ysl {
  d: path("M4.5 17.5v-6l15-4v10Zm-2 3h19m-17-6h15");
}
</style><g class="hntgybcog"><path class="u-rh33ysl"/><path class="k5f3nnb5e"/></g>`,
		"fallback": "uix:patisserie",
	});
}

export default Component;
