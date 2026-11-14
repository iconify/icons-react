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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.usi5meawu {
  d: path("M10 8.5C7.5 6 4 9 4 14.5c0 3 .75 5 2.5 5c2 0 3.5-1 3.5-3Zm4 0c2.5-2.5 6 .5 6 6c0 3-.75 5-2.5 5c-2 0-3.5-1-3.5-3ZM12 3v6");
}

.uv6-tdz_y {
  d: path("M9.75 11.5L12 9l2.25 2.5");
}
</style><g class="ulnmmdpxh"><path class="usi5meawu"/><path class="uv6-tdz_y"/></g>`,
		"fallback": "uix-sharp:lungs",
	});
}

export default Component;
