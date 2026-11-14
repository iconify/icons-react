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
		"content": `<style>.knk109_hl {
  d: path("M7.5 2h9v20h-9ZM12 6h.01");
}

.q58l7it0y {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 6h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="knk109_hl"/><path class="q58l7it0y"/></g>`,
		"fallback": "uix-sharp:traffic-light-amber",
	});
}

export default Component;
