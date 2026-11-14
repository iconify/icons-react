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
		"content": `<style>.bnutvgb7t {
  d: path("M18 21.5V9A5 5 0 0 0 8 9v9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.offgktbzi {
  d: path("M4.5 15L8 18.5l3.5-3.5");
}
</style><g class="hntgybcog"><path class="bnutvgb7t"/><path class="offgktbzi"/></g>`,
		"fallback": "uix:lane-arrow-u-turn",
	});
}

export default Component;
