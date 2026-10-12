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
		"content": `<style>.km8emob2x {
  cx: 12px;
  cy: 16.25px;
  r: 1.75px;
}

.spd5o1b1t {
  d: path("M5.25 2.75h13.5v18.5H5.25zm3.75 4h6m-6 2.5h6m-6 2.5h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="spd5o1b1t"/><circle class="km8emob2x"/></g>`,
		"fallback": "iconoven:intercom-sharp",
	});
}

export default Component;
