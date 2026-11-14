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
		"content": `<style>.djn-6pd6f {
  d: path("M4.5 11a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.hbfpy5vnz {
  d: path("M10 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 21h18M7 18.5V21m10-2.5V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="djn-6pd6f"/><path class="hbfpy5vnz"/></g>`,
		"fallback": "uix:meat-slicer",
	});
}

export default Component;
