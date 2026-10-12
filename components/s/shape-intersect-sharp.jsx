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
		"content": `<style>.gsrd1ox5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 8.75h4.5v6.5h-6.5v-6.5zm-5.12 6.5h.01m-2.69-1.16h.01M2.75 11h.01m-.01-3.12h.01m-.01-3.13h.01m1.99-2h.01m3.12 0h.01m3.11 0h.01m3.08.2h.01m1.15 2.68h.01m3.11 3.12h.01m2.67 1.16h.01m.19 3.09h.01m-.01 3.12h.01m-.01 3.13h.01m-2.01 2h.01m-3.14 0h.01m-3.13 0h.01m-3.1-.2h.01m-1.17-2.68h.01");
}
</style><path class="gsrd1ox5d"/>`,
		"fallback": "iconoven:shape-intersect-sharp",
	});
}

export default Component;
