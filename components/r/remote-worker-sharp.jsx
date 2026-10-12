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
		"content": `<style>.hajmoyu0i {
  cx: 12px;
  cy: 8.75px;
  r: 2.25px;
}

.skego1bea {
  d: path("M6.5 13.5h11v5.25h-11zm-2.75 7.75h16.5M2.75 10L12 2.75L21.25 10");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="hajmoyu0i"/><path class="skego1bea"/></g>`,
		"fallback": "iconoven:remote-worker-sharp",
	});
}

export default Component;
