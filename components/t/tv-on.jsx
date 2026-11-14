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

.li543jbnl {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 14V7A3.5 3.5 0 0 1 6 3.5m2 17h8");
}

.wrs0-fwww {
  d: path("M9 8a3.9 3.9 0 1 0 6 0m-3-1.5v4");
}
</style><g class="hntgybcog"><path class="li543jbnl"/><path class="wrs0-fwww"/></g>`,
		"fallback": "uix:tv-on",
	});
}

export default Component;
