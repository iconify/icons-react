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
		"content": `<style>.fdnmnlbvi {
  fill: currentColor;
  d: path("M5.75 15.25a1.5 2 0 1 0 3 0a1.5 2 0 1 0-3 0m9.5 0a1.5 2 0 1 0 3 0a1.5 2 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t2cbuys_z {
  d: path("M3.5 8.5a8.5 6 0 1 0 17 0a8.5 6 0 1 0-17 0m8.5 6v7");
}
</style><g class="hntgybcog"><path class="t2cbuys_z"/><path class="fdnmnlbvi"/></g>`,
		"fallback": "uix:mango-tree",
	});
}

export default Component;
