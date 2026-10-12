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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.vfek64b7q {
  d: path("m8.75 14.75l-1.6-2.1l-.6-.8l1.6-1.2l.6.8v-3.2h2v1v-2h2V8.5v-1h2v2.25v-1h2V18h-4.5l-3.267.008zM5.5 5.5l13 13");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="vfek64b7q"/></g>`,
		"fallback": "iconoven:no-touch-sharp",
	});
}

export default Component;
