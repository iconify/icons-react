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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1xp8vb-e {
  d: path("M12 6.75a2.5 2.5 0 0 0-1.3 4.65l-.95 5.1h4.5l-.95-5.1A2.5 2.5 0 0 0 12 6.75Z");
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="y1xp8vb-e"/></g>`,
		"fallback": "iconoven:keyhole-sharp",
	});
}

export default Component;
