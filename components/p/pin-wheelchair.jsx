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
		"content": `<style>.hadfdob5y {
  d: path("M8.75 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 4.75v5.25h5.5l2.5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lhmj6kb2n {
  d: path("M14.639 12.111a5.5 5.5 0 1 1-8.223.503");
}
</style><g class="hntgybcog"><path class="hadfdob5y"/><path class="lhmj6kb2n"/></g>`,
		"fallback": "uix:pin-wheelchair",
	});
}

export default Component;
