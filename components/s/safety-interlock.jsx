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

.v1km-zr0j {
  d: path("m3.5 2.5l7 2.5v14l-7 2.5Zm7 8.5H14m1 6h6v4.5h-6Zm1.25 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.vgl6hsb4f {
  d: path("M3.5 21.5v-19h14v9");
}
</style><g class="ulnmmdpxh"><path class="vgl6hsb4f"/><path class="v1km-zr0j"/></g>`,
		"fallback": "uix-sharp:safety-interlock",
	});
}

export default Component;
