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

.wfrd3qbzd {
  d: path("M9 22L15 2");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.y3ug6dett {
  d: path("M3 22H15M9 2H21");
}
</style><g class="hntgybcog"><path class="y3ug6dett"/><path class="wfrd3qbzd"/></g>`,
		"fallback": "solar:text-italic-line-duotone",
	});
}

export default Component;
