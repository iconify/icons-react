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
		"content": `<style>.kae9sq5_w {
  d: path("M12 14c-2.5-1.75-3.5-3-3.5-4.25a1.75 1.75 0 0 1 3.5-.5a1.75 1.75 0 0 1 3.5.5c0 1.25-1 2.5-3.5 4.25Zm-8.75 2h17.5v2.5H3.25zM5 18.5h3v2.75H5v-1Zm11 0h3v2.75h-3v-1Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzi5_pbnu {
  d: path("M4.75 16v-6a7.25 7.25 0 0 1 14.5 0v6Z");
}
</style><g class="x2cwu0gfd"><path class="xzi5_pbnu"/><path class="kae9sq5_w"/></g>`,
		"fallback": "iconoven:rickshaw-art-sharp",
	});
}

export default Component;
