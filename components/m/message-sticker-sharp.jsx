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
		"content": `<style>.ld8ympnzk {
  d: path("M15.25 4.25V9.5h5.25m-13 2.75l3.25 2.786L14 12.25");
}

.tv_h2ebsi {
  d: path("M2.75 6.25v-2.5H14.7l.621.001l.439.439l5.05 5.05l.439.439l.001.621V18H12.5L8 20.85l-1.25 1v-4.1h-4v-2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tv_h2ebsi"/><path class="ld8ympnzk"/></g>`,
		"fallback": "iconoven:message-sticker-sharp",
	});
}

export default Component;
