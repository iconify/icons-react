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
		"content": `<style>.r8wocdcfy {
  d: path("M6.25 7.5h1.5V9h-1.5z");
}

.tvcvnp45p {
  d: path("M6.25 4.5h4.5V7h2.5V4.5h5V7h2.5v5h-2.5v2.5h-2.5V17h-2.5v2.5h-2.5V17h-2.5v-2.5h-2.5V12h-2.5V7h2.5V4.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tvcvnp45p"/><path class="r8wocdcfy"/></g>`,
		"fallback": "iconoven:pixel-heart-sharp",
	});
}

export default Component;
