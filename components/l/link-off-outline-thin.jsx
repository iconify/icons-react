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
		"content": `<style>.e-g8-f9ol {
  d: path("M2 8a3 3 0 0 1 3 -3h3a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rf-csebev {
  d: path("M13 16a3 3 0 0 1 3 -3h3a3 3 0 0 1 3 3 3 3 0 0 1 -3 3h-3a3 3 0 0 1 -3 -3");
}
</style><g class="hntgybcog"><path class="e-g8-f9ol"/><path class="rf-csebev"/></g>`,
		"fallback": "iconmind:link-off-outline-thin",
	});
}

export default Component;
