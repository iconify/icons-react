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
		"content": `<style>.ngy9n_01x {
  d: path("M6.5 7.75C6 5 7.25 3.5 9 3.75l1.5-1.125L12 3.75l1.5-1.125L15 3.75c1.75-.25 3 1.25 2.5 4m-11.25 4v9.5m11.5-9.5v9.5M6.25 14.5h11.5M6.25 18h11.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xde_ksb-v {
  d: path("M9.75 6.75h5.75l1.16.48l1.93.79l1.16.48l.16 1.24l1.18 9.27l.16 1.24l-1.2.34l-1.1.32l-1.2.34H6.25l-1.2-.34l-1.1-.32l-1.2-.34l.16-1.24l1.18-9.27l.16-1.24l1.16-.48l1.93-.79l1.16-.48z");
}
</style><g class="x2cwu0gfd"><path class="xde_ksb-v"/><path class="ngy9n_01x"/></g>`,
		"fallback": "iconoven:parka-sharp",
	});
}

export default Component;
