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
		"content": `<style>.dsim5lx0w {
  d: path("M3.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-1 11.5c0-3.5 1.75-5.5 4-5.5s4 2 4 5.5m3-7.5h3L21 7.5M16.5 12l4.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xv-y5ypoc {
  d: path("M17.5 7.5H21V11");
}
</style><g class="ulnmmdpxh"><path class="dsim5lx0w"/><path class="xv-y5ypoc"/></g>`,
		"fallback": "uix-sharp:lead-routing",
	});
}

export default Component;
