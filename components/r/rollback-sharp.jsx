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
		"content": `<style>.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.fy_zkkblp {
  d: path("M3.25 12a8.75 8.75 0 1 0 2.6-6.2l-2.6 2.7m0-4.75V8.5H8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fy_zkkblp"/><circle class="e-2-i017w"/></g>`,
		"fallback": "iconoven:rollback-sharp",
	});
}

export default Component;
