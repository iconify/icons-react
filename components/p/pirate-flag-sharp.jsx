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
		"content": `<style>.e1jgy-aym {
  d: path("M6.75 2.75h14.5v13H6.75z");
}

.lpbfd9beg {
  d: path("M13.75 5.25h-2.1v3.155l1 .545v.8h2.2v-.8l1-.545V5.25zm-3 6l6 2m0-2l-6 2m-6.5-10.5v18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e1jgy-aym"/><path class="lpbfd9beg"/></g>`,
		"fallback": "iconoven:pirate-flag-sharp",
	});
}

export default Component;
