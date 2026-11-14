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
		"content": `<style>.a0xogunrv {
  d: path("M14.25 18a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm2.5-1.5v3m2.5-3v3");
}

.l_996045i {
  d: path("M3.5 21.5v-19m0 2.5h17m-9 13.5h-5v-11H20v4.2M9 5v2.5M17.5 5v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l_996045i"/><path class="a0xogunrv"/></g>`,
		"fallback": "uix-sharp:sale-pending-sign",
	});
}

export default Component;
