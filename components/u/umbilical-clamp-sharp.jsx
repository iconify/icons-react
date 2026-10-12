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
		"content": `<style>.kju4aacwz {
  d: path("m6.6 11.3l13.9-6.05M6.6 12.7l13.9 6.05M12 8.95l.6 1.38m3.9-3.34l.6 1.38M12 15.05l.6-1.38m3.9 3.34l.6-1.38");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhrmdpbwo {
  cx: 5px;
  cy: 12px;
  r: 1.75px;
}
</style><g class="x2cwu0gfd"><circle class="zhrmdpbwo"/><path class="kju4aacwz"/></g>`,
		"fallback": "iconoven:umbilical-clamp-sharp",
	});
}

export default Component;
