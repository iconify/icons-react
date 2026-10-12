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
		"content": `<style>.crhi1p5gr {
  d: path("M2.75 2.75h18.5v12.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2c6ffd3h {
  d: path("m2.75 12.75l4.5-4.5l4.5 4.5m-1.5-1.5l2-2l4.5 4.5m-14 4h4.5v3.5h-4.5zm7 0h4.5v3.5h-4.5zm7 0h4.5v3.5h-4.5z");
}
</style><g class="x2cwu0gfd"><path class="crhi1p5gr"/><path class="y2c6ffd3h"/></g>`,
		"fallback": "iconoven:photo-gallery-sharp",
	});
}

export default Component;
