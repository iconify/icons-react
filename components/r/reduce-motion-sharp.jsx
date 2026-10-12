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
		"content": `<style>.p-lcgvb0t {
  d: path("M2.75 8.5h1.5m2 0h1.5m-5 3.5h1.5m2 0h2m-5.5 3.5h1.5m2 0h1.5");
}

.roq2xac0a {
  cx: 16px;
  cy: 12px;
  r: 5.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="roq2xac0a"/><path class="p-lcgvb0t"/></g>`,
		"fallback": "iconoven:reduce-motion-sharp",
	});
}

export default Component;
