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
		"content": `<style>.x_1zn3bfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 11.25a6.75 6.75 0 0 1 13.5 0ZM12 4.5V3M2.75 13.75h18.5m-16 0v7.5m13.5-7.5v7.5m-13.5-3.5h13.5");
}
</style><path class="x_1zn3bfk"/>`,
		"fallback": "iconoven:room-service-sharp",
	});
}

export default Component;
