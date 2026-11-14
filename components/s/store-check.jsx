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
		"content": `<style>.a5ydkac_n {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0m-6.25 9l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymzh4bzji {
  d: path("m3 9l1.5-5h15L21 9M4.5 11v9H12");
}
</style><g class="hntgybcog"><path class="ymzh4bzji"/><path class="a5ydkac_n"/></g>`,
		"fallback": "uix:store-check",
	});
}

export default Component;
