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
		"content": `<style>.a0x459bls {
  d: path("M4 21v-5c0 -4 4 -7 8 -5 1 0.5 2 1.5 2 3V9c0 -3 3 -5 5 -3s2 6 1 9 -3 6 -7 6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5u2kbc9g {
  fill: currentColor;
  d: path("M4 21v-5c0 -4 4 -7 8 -5 1 0.5 2 1.5 2 3V9c0 -3 3 -5 5 -3s2 6 1 9 -3 6 -7 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="m5u2kbc9g"/><path class="a0x459bls"/></g>`,
		"fallback": "iconmind:muscle-duotone-thin",
	});
}

export default Component;
