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
		"content": `<style>.gqz5ks03w {
  d: path("M21.5 10H12a4 4 0 0 0 0 8h9.5");
}

.lq4uw6riw {
  d: path("M2.5 6H12a4 4 0 0 1 0 8H2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lq4uw6riw"/><path class="gqz5ks03w"/></g>`,
		"fallback": "uix-sharp:reef-knot",
	});
}

export default Component;
