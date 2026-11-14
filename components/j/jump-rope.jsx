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
		"content": `<style>.pos7ej6th {
  d: path("M5 3.5V7c0 13 14 13 14 0V3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpkehhckr {
  d: path("M3.5 2.5h3V8h-3Zm14 0h3V8h-3Z");
}
</style><g class="ulnmmdpxh"><path class="pos7ej6th"/><path class="xpkehhckr"/></g>`,
		"fallback": "uix-sharp:jump-rope",
	});
}

export default Component;
