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
		"content": `<style>.sx_wyqbjl {
  d: path("M9 4.5H5.75v16.75h12.5V4.5H15");
}

.wdv75-boe {
  d: path("M9 2.75h6v3.5H9zM9 10h6m-6 3.5h6M9 17h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sx_wyqbjl"/><path class="wdv75-boe"/></g>`,
		"fallback": "iconoven:stock-count-sharp",
	});
}

export default Component;
