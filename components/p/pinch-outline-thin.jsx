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
		"content": `<style>.fpxzcl19b {
  d: path("m3 3 6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_x-fjbot {
  d: path("M15 18.5V15h3.5");
}

.m3uk2nwvd {
  d: path("M9 5.5V9H5.5");
}

.v8mti3bcl {
  d: path("m21 21 -6 -6");
}
</style><g class="hntgybcog"><path class="fpxzcl19b"/><path class="m3uk2nwvd"/><path class="v8mti3bcl"/><path class="m_x-fjbot"/></g>`,
		"fallback": "iconmind:pinch-outline-thin",
	});
}

export default Component;
