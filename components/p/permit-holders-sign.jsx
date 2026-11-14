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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vngkfefhw {
  d: path("M2.5 2.5h19v13h-19Zm9.5 13v6");
}

.xncuyrj0j {
  d: path("M6.5 12.5v-7H8a2 2 0 0 1 0 4H6.5m6-.5l2 2l4-4");
}
</style><g class="ulnmmdpxh"><path class="vngkfefhw"/><path class="xncuyrj0j"/></g>`,
		"fallback": "uix-sharp:permit-holders-sign",
	});
}

export default Component;
