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
		"content": `<style>.j1t34yoiz {
  d: path("M15 2.5v5h5M9 11.75A2.5 2.5 0 1 1 12.5 14c-.75.5-1 1-1 1.75m0 2.75h.01");
}

.su3vw8bra {
  d: path("M4 2.5h11l5 5v14H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="su3vw8bra"/><path class="j1t34yoiz"/></g>`,
		"fallback": "uix-sharp:promise",
	});
}

export default Component;
