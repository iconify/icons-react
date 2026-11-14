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
		"content": `<style>.he3s4_kjg {
  d: path("m6 3.5l3-1L12 4l3-1.5l3 1V17c0 2.5 1 3.75 2.5 4.5h-17C5 20.75 6 19.5 6 17Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy8n70bsr {
  d: path("m12 15l-2.25-2.25A1.75 1.75 0 0 1 12 10.5a1.75 1.75 0 0 1 2.25 2.25Z");
}
</style><g class="hntgybcog"><path class="he3s4_kjg"/><path class="oy8n70bsr"/></g>`,
		"fallback": "uix:tree-trunk-carved",
	});
}

export default Component;
