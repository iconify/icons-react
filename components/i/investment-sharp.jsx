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
		"content": `<style>.atnlzk-iz {
  d: path("m17.51 14.94l-.467-1H14.46v1.15c0 1.63 3.12.81 3.12 2.37v1.11h-2.692l-.388-.97M3.25 12.5L7.5 8.25L10.25 11l6.5-6.5m-3.5 0h3.5V8");
}

.mjuvf7ivb {
  cx: 16px;
  cy: 16.25px;
  r: 5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="mjuvf7ivb"/><path class="atnlzk-iz"/></g>`,
		"fallback": "iconoven:investment-sharp",
	});
}

export default Component;
