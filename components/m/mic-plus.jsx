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
		"content": `<style>.k1aqur_1z {
  d: path("M7 2.5h4a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z");
}

.o911x5vpn {
  d: path("M2.5 11a6.5 6.5 0 0 0 13 0M9 17.5v4M18.5 3v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k1aqur_1z"/><path class="o911x5vpn"/></g>`,
		"fallback": "uix-sharp:mic-plus",
	});
}

export default Component;
