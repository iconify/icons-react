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

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.odj5t8eez {
  d: path("M9.5 12.5h5l-5 5h5Z");
}
</style><g class="hntgybcog"><path class="mcubrkb2y"/><path class="odj5t8eez"/></g>`,
		"fallback": "iconmind:transfer-pending-outline-thin",
	});
}

export default Component;
