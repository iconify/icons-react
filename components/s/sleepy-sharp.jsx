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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.fx0u2mbzs {
  d: path("m7.75 10l1.375 1.375L10.5 10m3 0l1.375 1.375L16.25 10m-6.5 8l3-.5");
}

.i6a05acrm {
  cx: 13.5px;
  cy: 14px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="fx0u2mbzs"/><circle class="i6a05acrm"/></g>`,
		"fallback": "iconoven:sleepy-sharp",
	});
}

export default Component;
