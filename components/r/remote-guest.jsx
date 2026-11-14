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
		"content": `<style>.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vra354boq {
  d: path("M10 8.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM7.5 16.5c0-2.25 2-3.5 4.5-3.5s4.5 1.25 4.5 3.5");
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="vra354boq"/></g>`,
		"fallback": "uix-sharp:remote-guest",
	});
}

export default Component;
