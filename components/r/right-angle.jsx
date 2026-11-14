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

.hp8lutrqw {
  d: path("M5 4v16h15");
}

.lntgyoj_g {
  d: path("M5 14.5h5.5V20");
}
</style><g class="hntgybcog"><path class="hp8lutrqw"/><path class="lntgyoj_g"/></g>`,
		"fallback": "uix:right-angle",
	});
}

export default Component;
