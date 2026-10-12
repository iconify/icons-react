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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0ie0obri {
  width: 18.5px;
  height: 5.5px;
  x: 2.75px;
  y: 11.75px;
  rx: 2px;
}

.xm9yb7npa {
  d: path("M8.5 14.5H18M5.5 11.75L20.25 5.5M4 21.25v-1.5h3.5v1.5");
}
</style><g class="hntgybcog"><rect class="k0ie0obri"/><path class="xm9yb7npa"/></g>`,
		"fallback": "iconoven:staple-gun",
	});
}

export default Component;
