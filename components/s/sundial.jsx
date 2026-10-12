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

.kx3fml3jw {
  d: path("M12 14.25V7.5q0-1 .5-.13l4 7.01q.5.87-.5.87h-3q-1 0-1-1M6.11 12.5l-1.81-.84m3.18-1.09L6.1 9.14m3.36.13l-.78-1.84");
}

.w9wep5w-h {
  width: 17.5px;
  height: 3.5px;
  x: 3.25px;
  y: 15.25px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="w9wep5w-h"/><path class="kx3fml3jw"/></g>`,
		"fallback": "iconoven:sundial",
	});
}

export default Component;
