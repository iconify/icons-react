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

.i9t0w8bjh {
  width: 13.25px;
  height: 6.5px;
  x: 8px;
  y: 8.75px;
  rx: 3.25px;
}

.uux0pkbhb {
  d: path("M12.25 8.75v6.5M17 8.75v6.5m-14.25-5H5m-2.25 3.5H5");
}
</style><g class="hntgybcog"><rect class="i9t0w8bjh"/><path class="uux0pkbhb"/></g>`,
		"fallback": "iconoven:relay-baton",
	});
}

export default Component;
