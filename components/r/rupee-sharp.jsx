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

.oyefgfbmh {
  d: path("M8.25 6.5h7.5m-7.5 3.25h7.5M10.5 6.5c2 0 3.25 1.3 3.25 3.25S12.5 13 10.5 13H8.25l6 5.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="oyefgfbmh"/></g>`,
		"fallback": "iconoven:rupee-sharp",
	});
}

export default Component;
