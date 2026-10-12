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
		"content": `<style>.aawmw2usn {
  d: path("M3 4.5h2.5v8H3zm15.5 7H21v8h-2.5zM12 3v1.5m0 2.75v1.5m0 2.75V13m0 2.25v1.5m0 2.75V21");
}

.eztgyjb_y {
  cx: 15.75px;
  cy: 7.25px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aawmw2usn"/><circle class="eztgyjb_y"/></g>`,
		"fallback": "iconoven:pong-sharp",
	});
}

export default Component;
