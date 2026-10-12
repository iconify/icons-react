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

.oevhb-xbf {
  width: 11.5px;
  height: 2.75px;
  x: 7.5px;
  y: 18.5px;
  rx: 1.25px;
}

.w6-nqabik {
  d: path("M18.25 16.25V8.5a4.75 4.75 0 0 0-9.5 0v1.6L6.6 8.7a1.9 1.9 0 0 0-2.4 2.9l4.55 4.65Zm-7-6.25h4");
}
</style><g class="hntgybcog"><path class="w6-nqabik"/><rect class="oevhb-xbf"/></g>`,
		"fallback": "iconoven:oven-mitt",
	});
}

export default Component;
