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

.poyc1firz {
  d: path("M4 21H20");
}

.rn9p1ts4c {
  d: path("M4 3V9C4 13.4183 7.58172 17 12 17C16.4183 17 20 13.4183 20 9V3");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="poyc1firz"/><path class="rn9p1ts4c"/></g>`,
		"fallback": "solar:text-underline-line-duotone",
	});
}

export default Component;
