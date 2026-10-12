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
		"content": `<style>.lnp2xibll {
  d: path("M12 17s-4.25-2.5-4.25-5.5a2.15 2.15 0 0 1 4.25-.75a2.15 2.15 0 0 1 4.25.75c0 3-4.25 5.5-4.25 5.5Z");
}

.sq0s0082k {
  d: path("M4.5 7.25a8.5 8.5 0 1 1-1 4.75m.25-8.25V7.5H7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sq0s0082k"/><path class="lnp2xibll"/></g>`,
		"fallback": "iconoven:memories-clock-sharp",
	});
}

export default Component;
