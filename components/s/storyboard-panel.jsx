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

.hzvp4c2rr {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5V12a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 12V6.5A3.5 3.5 0 0 1 6.5 3");
}

.zaow9tbat {
  d: path("m6 12l3.5-3.5L12 11l2-2l4 3.5M3 18h18M3 21.25h11");
}
</style><g class="hntgybcog"><path class="hzvp4c2rr"/><path class="zaow9tbat"/></g>`,
		"fallback": "uix:storyboard-panel",
	});
}

export default Component;
