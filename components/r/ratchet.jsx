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
		"content": `<style>.atv66_b1j {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.mr45h3c4a {
  d: path("M18 12h2.5l-4.25 4.25L18 18h-6v2.5l-4.25-4.25L6 18v-6H3.5l4.25-4.25L6 6h6V3.5l4.25 4.25L18 6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mr45h3c4a"/><path class="atv66_b1j"/></g>`,
		"fallback": "uix-sharp:ratchet",
	});
}

export default Component;
