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

.sn2fxebfr {
  d: path("m11 9l1.25-1v5.25");
}

.wn7d8hb0m {
  d: path("M2.75 21.25V12.5a1 1 0 0 1 1-1h5V5.75a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v8H20a1 1 0 0 1 1 1v6.5Z");
}
</style><g class="hntgybcog"><path class="wn7d8hb0m"/><path class="sn2fxebfr"/></g>`,
		"fallback": "iconoven:podium",
	});
}

export default Component;
