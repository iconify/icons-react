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
		"content": `<style>.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.n04bfsdpz {
  d: path("M12 12C5.21.92 18.79.92 12 12Zm0 0c13-.34 6.2 11.43 0 0Zm0 0c-6.2 11.43-13-.34 0 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n04bfsdpz"/><circle class="e-2-i017w"/></g>`,
		"fallback": "iconoven:propeller-ship-sharp",
	});
}

export default Component;
