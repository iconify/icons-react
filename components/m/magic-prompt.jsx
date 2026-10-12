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

.j85p7wbjk {
  width: 14.5px;
  height: 9.5px;
  x: 2.75px;
  y: 8.75px;
  rx: 2.5px;
}

.jc35khbif {
  d: path("m6.25 11.75l2 1.75l-2 1.75m4.25 0H13M18.25 3q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}
</style><g class="hntgybcog"><rect class="j85p7wbjk"/><path class="jc35khbif"/></g>`,
		"fallback": "iconoven:magic-prompt",
	});
}

export default Component;
