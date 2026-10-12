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
		"content": `<style>.h9dg4t8hh {
  d: path("M6.5 13H10v2.75H6.5zm7.5 0h3.5v2.75H14zM3.25 14.375H6.5m3.5 0h4m3.5 0h3.25");
}

.nkjpnnb7v {
  d: path("M3.25 17.25v-3.5a8.75 8.75 0 0 1 17.5 0v5H3.25zM12 5v5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nkjpnnb7v"/><path class="h9dg4t8hh"/></g>`,
		"fallback": "iconoven:swim-cap-sharp",
	});
}

export default Component;
