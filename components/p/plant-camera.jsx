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

.npk3-51bl {
  d: path("M3 8.5a2 2 0 0 1 2-2h2.5L9 4h6l1.5 2.5H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.sdoml3jmr {
  d: path("M12 17.25V13.5c-.25-2.25-1.75-3.5-4-3.5c0 2 1.75 3.5 4 3.5c.25-2.5 1.75-4 4-4c0 2.25-1.75 4-4 4");
}
</style><g class="hntgybcog"><path class="npk3-51bl"/><path class="sdoml3jmr"/></g>`,
		"fallback": "uix:plant-camera",
	});
}

export default Component;
