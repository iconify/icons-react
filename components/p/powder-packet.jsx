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
		"content": `<style>.ig3ajobdn {
  d: path("m5 5l1.75-2L8.5 5l1.75-2L12 5l1.75-2l1.75 2l1.75-2L19 5v14a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19Zm0 3h14");
}

.ijla-ebtb {
  d: path("M8 17.5q4-6 8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ig3ajobdn"/><path class="ijla-ebtb"/></g>`,
		"fallback": "uix-sharp:powder-packet",
	});
}

export default Component;
