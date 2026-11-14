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
		"content": `<style>.es_d5xbfm {
  d: path("M7.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.5-3V13h2.5v3.5m4-4.5h.01");
}

.toa3gkblk {
  d: path("m3.5 10l6-6l6 6v6.5h-12Zm-1 6.5h14l5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="toa3gkblk"/><path class="es_d5xbfm"/></g>`,
		"fallback": "uix-sharp:tiny-house",
	});
}

export default Component;
