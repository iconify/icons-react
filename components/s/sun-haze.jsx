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
		"content": `<style>.akvay5xpc {
  cx: 12px;
  cy: 9.5px;
  r: 4px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r3my3obvz {
  d: path("M6.5 9.5h-1m2.61-3.89L7.4 4.9M12 4V3m3.89 2.61l.71-.71m.9 4.6h1M3.75 17h16.5m-13.5 3.75h10.5");
}
</style><g class="hntgybcog"><circle class="akvay5xpc"/><path class="r3my3obvz"/></g>`,
		"fallback": "iconoven:sun-haze",
	});
}

export default Component;
