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

.j5ljj1bje {
  d: path("m4.5 10.75l2.9 2.2a1.5 1.5 0 0 0 1.7 0l2.9-2.2M16.25 13V3.25h4.5L19.5 6l1.25 2.75h-4.5");
}

.u7n6q4bzr {
  width: 11px;
  height: 12px;
  x: 2.75px;
  y: 7.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="u7n6q4bzr"/><path class="j5ljj1bje"/></g>`,
		"fallback": "iconoven:mail-flag",
	});
}

export default Component;
