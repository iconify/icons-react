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
		"content": `<style>.enks7630l {
  d: path("M2.75 12h14v7.75h-14zm14.7.98l3.1-1.21l.7-.27v8l-.7-.27l-3.1-1.21l-.7-.27v-4.5z");
}

.qe3spob8a {
  cx: 6.25px;
  cy: 6.25px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xascr4b4t {
  cx: 14px;
  cy: 7px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="qe3spob8a"/><circle class="xascr4b4t"/><path class="enks7630l"/></g>`,
		"fallback": "iconoven:projector-cinema-sharp",
	});
}

export default Component;
