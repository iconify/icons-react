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

.sfylf3b0e {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 6h.01");
}

.tja79etgw {
  d: path("M11.875 2h.25A4.375 4.375 0 0 1 16.5 6.375v11.25A4.375 4.375 0 0 1 12.125 22h-.25A4.375 4.375 0 0 1 7.5 17.625V6.375A4.375 4.375 0 0 1 11.875 2M12 6h.01");
}
</style><g class="hntgybcog"><path class="tja79etgw"/><path class="sfylf3b0e"/></g>`,
		"fallback": "uix:traffic-light-amber",
	});
}

export default Component;
