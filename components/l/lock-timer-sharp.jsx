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
		"content": `<style>.palpaupib {
  d: path("M2.75 10.25h9v9.5h-9zm2 0V7.5a2.5 2.5 0 0 1 5 0v2.75");
}

.x0pdqfwra {
  d: path("M17.75 14.5V16l1 1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2tlmlb4i {
  cx: 17.75px;
  cy: 16px;
  r: 3.5px;
}
</style><g class="x2cwu0gfd"><path class="palpaupib"/><circle class="z2tlmlb4i"/><path class="x0pdqfwra"/></g>`,
		"fallback": "iconoven:lock-timer-sharp",
	});
}

export default Component;
