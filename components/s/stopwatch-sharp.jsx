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
		"content": `<style>.fhcsjwttb {
  cx: 12px;
  cy: 13.5px;
  r: 7.75px;
}

.si7a6shde {
  d: path("M10 2.75h4m-2 0v3M17.5 8l1.75-1.75M12 13.5l2.75-2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="fhcsjwttb"/><path class="si7a6shde"/></g>`,
		"fallback": "iconoven:stopwatch-sharp",
	});
}

export default Component;
