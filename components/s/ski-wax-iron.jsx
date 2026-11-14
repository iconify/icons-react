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
		"content": `<style>.pkgite2ap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 14.5l2.5-5c.75-1.5 2-2 3.5-2h11.5v7Zm7.5-7V4h8v3.5M2.5 19h19");
}
</style><path class="pkgite2ap"/>`,
		"fallback": "uix-sharp:ski-wax-iron",
	});
}

export default Component;
