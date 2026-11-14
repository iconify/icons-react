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
		"content": `<style>.gorrxnp8o {
  d: path("M2.5 12a9.5 6.75 0 1 0 19 0a9.5 6.75 0 1 0-19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_c3f5biq {
  d: path("M7.5 11a4.5 2 0 1 0 9 0a4.5 2 0 1 0-9 0M5 15.5c2 1.75 4.5 2.5 7 2.5");
}
</style><g class="hntgybcog"><path class="gorrxnp8o"/><path class="y_c3f5biq"/></g>`,
		"fallback": "uix:red-blood-cell",
	});
}

export default Component;
