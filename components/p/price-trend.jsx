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
		"content": `<style>.jn05a6lxy {
  d: path("m3 17l5.5-6l4 3.5l8-8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0jk3oopn {
  d: path("M16 6h4.5v4.5");
}
</style><g class="ulnmmdpxh"><path class="jn05a6lxy"/><path class="v0jk3oopn"/></g>`,
		"fallback": "uix-sharp:price-trend",
	});
}

export default Component;
