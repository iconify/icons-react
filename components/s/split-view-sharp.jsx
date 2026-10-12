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
		"content": `<style>.ejk2p2aad {
  d: path("M2.75 3.75h18.5v16.5H2.75zM12 4.5v15");
}

.uj835yadn {
  d: path("m9 10l-2 2l2 2m6-4l2 2l-2 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ejk2p2aad"/><path class="uj835yadn"/></g>`,
		"fallback": "iconoven:split-view-sharp",
	});
}

export default Component;
