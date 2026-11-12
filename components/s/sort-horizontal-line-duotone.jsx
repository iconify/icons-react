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

.q_8p2fisw {
  d: path("M18 8L6 8M10.125 12L6 8L10.125 4");
}

.ye49tactn {
  d: path("M6 16L18 16M13.875 20L18 16L13.875 12");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="q_8p2fisw"/><path class="ye49tactn"/></g>`,
		"fallback": "solar:sort-horizontal-line-duotone",
	});
}

export default Component;
