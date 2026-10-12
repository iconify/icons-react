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
		"content": `<style>.i1t46rt8z {
  cx: 12px;
  cy: 7.75px;
  r: 1.5px;
}

.oaebh5hvr {
  d: path("m6.85 6.6l4.4-3.6l.75-.6l.75.6l4.4 3.6l.601.589l-.001.841v13.22H6.25V8.03l-.001-.841z");
}

.t8u-hjb1k {
  d: path("M9.25 12.75h5.5m-5.5 3.5h3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oaebh5hvr"/><circle class="i1t46rt8z"/><path class="t8u-hjb1k"/></g>`,
		"fallback": "iconoven:price-check-sharp",
	});
}

export default Component;
