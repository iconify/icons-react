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
		"content": `<style>.ay767rrlm {
  d: path("M13.454 16.021a3 3 0 0 1-2.433 2.433");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j3onfrbgd {
  d: path("m10.5 5.5l4.75 6.25a6 6 0 1 1-9.5 0Zm3.5 0q-.25-3.75 7-3q.25 3.75-7 3");
}
</style><g class="hntgybcog"><path class="j3onfrbgd"/><path class="ay767rrlm"/></g>`,
		"fallback": "uix:water-drop-leaf",
	});
}

export default Component;
