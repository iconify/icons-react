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
		"content": `<style>.h-aq3qbje {
  d: path("M7.5 8.75h3v3h-3Zm6 0h3v3h-3Zm-6 5.75h3v3h-3Zm6 0h3v3h-3Z");
}

.mtioimb9g {
  d: path("M2.5 6a2 2 0 0 1 2-2H9l2 2h8.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mtioimb9g"/><path class="h-aq3qbje"/></g>`,
		"fallback": "uix-sharp:monorepo",
	});
}

export default Component;
