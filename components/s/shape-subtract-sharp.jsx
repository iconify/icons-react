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
		"content": `<style>.t3wtwbpnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h10.5v6h-6.5v6.5h-6V2.75zm13.62 6h.01m2.67 1.16h.01m.19 3.09h.01m-.01 3.12h.01m-.01 3.13h.01m-2.01 2h.01m-3.14 0h.01m-3.13 0h.01m-3.1-.2h.01m-1.17-2.68h.01");
}
</style><path class="t3wtwbpnc"/>`,
		"fallback": "iconoven:shape-subtract-sharp",
	});
}

export default Component;
