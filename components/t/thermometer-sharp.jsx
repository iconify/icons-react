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
		"content": `<style>.pjzu56bly {
  cx: 12px;
  cy: 17px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yvphrkpvb {
  d: path("M9.5 13.55V5.5a2.5 2.5 0 0 1 5 0v8.05a4.25 4.25 0 1 1-5 0Zm2.5 2.2V8.5");
}
</style><g class="x2cwu0gfd"><path class="yvphrkpvb"/><circle class="pjzu56bly"/></g>`,
		"fallback": "iconoven:thermometer-sharp",
	});
}

export default Component;
