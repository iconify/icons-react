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
		"content": `<style>.lh9lh2bli {
  d: path("m3.63 6.62l2.74-2.74l.88-.88l.88.88l2.74 2.74l.88.88v13.75h-9V7.5z");
}

.os5mt0akv {
  d: path("M5.75 12.75h3m-3 3.5h3m8.5-12.5v16.5m-3.5-3.5l3.5 3.5l3.5-3.5");
}

.wykxeebol {
  cx: 7.25px;
  cy: 7.75px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lh9lh2bli"/><circle class="wykxeebol"/><path class="os5mt0akv"/></g>`,
		"fallback": "iconoven:price-reduced-sharp",
	});
}

export default Component;
