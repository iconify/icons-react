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
		"content": `<style>.cnsz8iz6h {
  d: path("M12.25 21.25h-7.5V2.75h13.5v9.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2rth1byv {
  d: path("M8.25 9.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m0 0h6.5M8.25 16h3m3.5 1.75l1.75 1.75l3.5-3.75");
}
</style><g class="x2cwu0gfd"><path class="cnsz8iz6h"/><path class="y2rth1byv"/></g>`,
		"fallback": "iconoven:passport-control-sharp",
	});
}

export default Component;
