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
		"content": `<style>.qoxrk8bci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v6.5H6.25zm-1 10.5h13.5v2.5H5.25zM8 15.75v5.5m8-5.5v5.5M2.75 11v10.25m0-4h2.5m16-6.25v10.25m0-4h-2.5");
}
</style><path class="qoxrk8bci"/>`,
		"fallback": "iconoven:meeting-room-sharp",
	});
}

export default Component;
