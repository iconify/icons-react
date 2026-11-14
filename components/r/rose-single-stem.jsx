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

.kaw7ibbdn {
  d: path("M7 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.mr8x4_bar {
  d: path("M12 5.25A2.25 2.25 0 1 1 9.75 7.5m2.25 5v9m0-2c0-2.5-2-4-5-4c0 2.5 2 4 5 4");
}
</style><g class="hntgybcog"><path class="kaw7ibbdn"/><path class="mr8x4_bar"/></g>`,
		"fallback": "uix:rose-single-stem",
	});
}

export default Component;
