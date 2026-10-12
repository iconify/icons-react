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
		"content": `<style>.neks5ib7s {
  cx: 18.25px;
  cy: 19px;
  r: 1.75px;
}

.t_6u2pibf {
  d: path("M10.25 16.02a6.75 6.75 0 1 1 3.5 0v5.23h-3.5v-1.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t_6u2pibf"/><circle class="neks5ib7s"/></g>`,
		"fallback": "iconoven:ping-pong-sharp",
	});
}

export default Component;
