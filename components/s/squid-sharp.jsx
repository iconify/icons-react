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
		"content": `<style>.wgvo3iwrh {
  d: path("m10.11 5.69l-4.4 1.87l-.46.19l.49.1l2.77.55l.49.1l.23-.44l1.11-2.12l.23-.44zm3.78 0l4.4 1.87l.46.19l-.49.1l-2.77.55l-.49.1l-.23-.44l-1.11-2.12l-.23-.44zM9.6 15.75V19l-1.5 2m3.9-5.25v5.5m2.4-5.5V19l1.5 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yz_8bm0vu {
  d: path("m12.42 3.55l2.16 4.15l.42.8l-.08.9l-.34 3.7l-.08.9h-5l-.08-.9l-.34-3.7L9 8.5l.42-.8l2.16-4.15l.42-.8z");
}
</style><g class="x2cwu0gfd"><path class="yz_8bm0vu"/><path class="wgvo3iwrh"/></g>`,
		"fallback": "iconoven:squid-sharp",
	});
}

export default Component;
