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

.r86e_n91x {
  cx: 18.75px;
  cy: 10.75px;
  r: 2.25px;
}

.rhnek6b2s {
  d: path("M4.25 3.25h1.5v5a4.5 4.5 0 0 0 9 0v-5h1.5m-6 9.5v2.5a4.25 4.25 0 0 0 8.5 0V13.5");
}
</style><g class="hntgybcog"><path class="rhnek6b2s"/><circle class="r86e_n91x"/></g>`,
		"fallback": "iconoven:stethoscope-heart",
	});
}

export default Component;
