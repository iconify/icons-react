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

.nasrfzbjy {
  d: path("M9.25 3.5A9.5 9.5 0 0 0 20.5 14.75");
}

.zpc0mrzbr {
  d: path("M20.5 14.75A9.25 9.25 0 1 1 9.25 3.5");
}
</style><g class="hntgybcog"><path class="zpc0mrzbr"/><path class="nasrfzbjy"/></g>`,
		"fallback": "uix:moon-crescent",
	});
}

export default Component;
