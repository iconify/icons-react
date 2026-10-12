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
		"content": `<style>.by21f3o1z {
  d: path("M2.75 13.5h18.5v3.25H2.75zm3.75 3.25v4.5m11-4.5v4.5");
}

.ew68babsr {
  cx: 5.5px;
  cy: 8.75px;
  r: 2px;
}

.mwe-9d8rn {
  cx: 12px;
  cy: 5.5px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xd6dk168z {
  cx: 18.5px;
  cy: 8.75px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><circle class="ew68babsr"/><circle class="mwe-9d8rn"/><circle class="xd6dk168z"/><path class="by21f3o1z"/></g>`,
		"fallback": "iconoven:meeting-sharp",
	});
}

export default Component;
