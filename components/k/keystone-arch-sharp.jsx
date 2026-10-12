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
		"content": `<style>.cj20qdd7a {
  d: path("M2.75 21.25V12a9.25 9.25 0 0 1 18.5 0v9.25h-4.5V12a4.75 4.75 0 0 0-9.5 0v9.25ZM8.64 8.64L5.46 5.46m9.9 3.18l3.18-3.18M2.75 12h4.5m9.5 0h4.5");
}

.rdnsd3b5k {
  d: path("M10.25 2.75h4l-.11.49l-.78 3.52l-.11.49h-2.5l-.11-.49l-.78-3.52l-.11-.49z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cj20qdd7a"/><path class="rdnsd3b5k"/></g>`,
		"fallback": "iconoven:keystone-arch-sharp",
	});
}

export default Component;
