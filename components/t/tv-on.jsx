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
		"content": `<style>.as1dxacva {
  d: path("M2.5 3.5h19v14h-19Zm5.5 17h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrs0-fwww {
  d: path("M9 8a3.9 3.9 0 1 0 6 0m-3-1.5v4");
}
</style><g class="ulnmmdpxh"><path class="as1dxacva"/><path class="wrs0-fwww"/></g>`,
		"fallback": "uix-sharp:tv-on",
	});
}

export default Component;
