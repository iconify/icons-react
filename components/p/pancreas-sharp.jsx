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
		"content": `<style>.rho0cyy6f {
  d: path("M6 15c2.25 0 3.75-2.25 6.25-3.5c2-1 4.25-1.5 6.25-1.5");
}

.wo24dwb9k {
  d: path("M3.25 14.5c0-2 1.5-3.75 3.5-3.75c1.5 0 2.5-1 4-2.25c1.75-1.5 3.75-2.25 6-2s4 1.5 4 3.5c0 1.75-1.5 2.75-3.25 3c-2 .25-3.75.75-5.25 2c-1.25 1-1.5 3-3.25 3.75l-1.417.708L5.75 19c-1.5-.5-2.5-2.5-2.5-4.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wo24dwb9k"/><path class="rho0cyy6f"/></g>`,
		"fallback": "iconoven:pancreas-sharp",
	});
}

export default Component;
