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
		"content": `<style>.g0gbqmb1l {
  cx: 8.5px;
  cy: 8.5px;
  r: 5.75px;
}

.p93apzsrc {
  d: path("m5.25 11.75l6.5-6.5m0 10h9.5v6h-9.5zm4.75 0v6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="g0gbqmb1l"/><path class="p93apzsrc"/></g>`,
		"fallback": "iconoven:pills-sharp",
	});
}

export default Component;
