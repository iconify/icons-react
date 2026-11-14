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
		"content": `<style>.i_jo6mb3j {
  d: path("M2.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wn2y5rbcn {
  d: path("M8 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-5.5 0H8m4 0h5.5M10 14v5.5M20.75 7v6.5m0 3.5h.01");
}
</style><g class="ulnmmdpxh"><path class="i_jo6mb3j"/><path class="wn2y5rbcn"/></g>`,
		"fallback": "uix-sharp:power-steering-warning",
	});
}

export default Component;
