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
		"content": `<style>.abi5dgbyq {
  d: path("M8 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m3.5-.5a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m2.5 1a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2_o3bcmt {
  d: path("M6.5 9h11c0-2.5 4-3 4-.25c0 1.5-1.25 2.25-2 3.25c.75 1 2 1.75 2 3.25c0 2.75-4 2.25-4-.25h-11c0 2.5-4 3-4 .25c0-1.5 1.25-2.25 2-3.25c-.75-1-2-1.75-2-3.25c0-2.75 4-2.25 4 .25");
}
</style><g class="hntgybcog"><path class="z2_o3bcmt"/><path class="abi5dgbyq"/></g>`,
		"fallback": "uix:osteoporosis",
	});
}

export default Component;
