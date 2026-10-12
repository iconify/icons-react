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
		"content": `<style>.m9ebg4kzq {
  d: path("M6.75 9.5h4V14h-4zm6.5 0h4V14h-4zm-9 2.25h-1.5m17 0h1.5");
}

.nlql5rbms {
  d: path("M4.25 7.25h15.5v9.25H4.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nlql5rbms"/><path class="m9ebg4kzq"/></g>`,
		"fallback": "iconoven:lab-goggles-sharp",
	});
}

export default Component;
