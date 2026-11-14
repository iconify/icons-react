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

.jks-j8nup {
  d: path("M20 12a8 8 0 1 1-2.25-5.75");
}

.zpb_sxbkz {
  d: path("M17.75 2.5v3.75H14");
}
</style><g class="hntgybcog"><path class="jks-j8nup"/><path class="zpb_sxbkz"/></g>`,
		"fallback": "uix:test-retry",
	});
}

export default Component;
