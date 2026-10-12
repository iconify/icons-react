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

.uvabpdbaa {
  d: path("M8 7.5a6.5 6.5 0 0 0 0 9m8-9a6.5 6.5 0 0 1 0 9M6.25 4.75a10 10 0 0 0 0 14.5m11.5-14.5a10 10 0 0 1 0 14.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="e-2-i017w"/><path class="uvabpdbaa"/></g>`,
		"fallback": "iconoven:wake-word-sharp",
	});
}

export default Component;
