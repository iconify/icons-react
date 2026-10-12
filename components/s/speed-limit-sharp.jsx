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

.ozcimdb6l {
  d: path("M6.75 8h3l-2 3a2.4 2.4 0 1 1-1.25 4.25M15 8h2.25v5.75a2.25 2.25 0 0 1-4.5 0V8z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="ozcimdb6l"/></g>`,
		"fallback": "iconoven:speed-limit-sharp",
	});
}

export default Component;
