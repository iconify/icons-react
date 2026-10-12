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
		"content": `<style>.e32-qo9ho {
  d: path("m3.62 4.25l3.51 2Q8 6.75 8 7.5t-.87 1.25l-3.51 2q-.87.5-.87-.5v-5.5q0-1 .87-.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.of79f_bgi {
  d: path("M8 7.5h11.25a2 2 0 0 1 2 2V15H8.5a2.75 2.75 0 0 0 0 5.5h12.75");
}
</style><g class="hntgybcog"><path class="e32-qo9ho"/><path class="of79f_bgi"/></g>`,
		"fallback": "iconoven:trombone",
	});
}

export default Component;
