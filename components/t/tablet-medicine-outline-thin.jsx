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

.nrlkc9bnf {
  d: path("M4 12a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}
</style><g class="hntgybcog"><path class="nrlkc9bnf"/><path class="sxlwlmkmh"/></g>`,
		"fallback": "iconmind:tablet-medicine-outline-thin",
	});
}

export default Component;
