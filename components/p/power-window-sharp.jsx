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
		"content": `<style>.hmha9xhbi {
  d: path("m4.08 9.51l3.34-3.77l1.33-1.49h5.5v16H2.75V11z");
}

.v8pwi-q0s {
  d: path("m6.25 11l3.5-3.75h1.75V11Zm13-6.25v14.5m-2-12.5l2-2l2 2m-4 10.5l2 2l2-2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hmha9xhbi"/><path class="v8pwi-q0s"/></g>`,
		"fallback": "iconoven:power-window-sharp",
	});
}

export default Component;
