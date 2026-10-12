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
		"content": `<style>.kgoxgjbrq {
  d: path("M6 10V2.75h12V10Zm-3.25 0h18.5v11.25H2.75z");
}

.n582-rtxx {
  d: path("M2.75 11L12 16.75L21.25 11");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kgoxgjbrq"/><path class="n582-rtxx"/></g>`,
		"fallback": "iconoven:invitation-sharp",
	});
}

export default Component;
