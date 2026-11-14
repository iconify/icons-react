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
		"content": `<style>.ce8u_ib6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18 2.5l-5 10m-6.5 0h12v3h-12ZM8 16l-.75 4.5M11 16l-.25 5M14 16l.25 5M17 16l.75 4.5M3.5 17h.01");
}
</style><path class="ce8u_ib6t"/>`,
		"fallback": "uix-sharp:mopping",
	});
}

export default Component;
