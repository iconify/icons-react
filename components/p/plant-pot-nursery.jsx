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

.m-12oui1x {
  d: path("M7.518 11h8.964a1.75 1.75 0 0 1 1.733 1.997l-1 7a1.75 1.75 0 0 1-1.733 1.503H8.518a1.75 1.75 0 0 1-1.733-1.503l-1-7A1.75 1.75 0 0 1 7.518 11M10 13.75l.25 5m3.75-5l-.25 5");
}

.um1cucc0o {
  d: path("M12 11V8c-.25-3-2.25-5-5.25-5C6.75 6 9 8 12 8c.25-3.25 2.25-5.5 5.25-5.5c0 3-2 5.5-5.25 5.5");
}
</style><g class="hntgybcog"><path class="m-12oui1x"/><path class="um1cucc0o"/></g>`,
		"fallback": "uix:plant-pot-nursery",
	});
}

export default Component;
