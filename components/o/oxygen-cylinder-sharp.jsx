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
		"content": `<style>.lmlzbdbgb {
  d: path("M8.5 9.05V4.5h3v4.55l2 .408V20.5h-7V9.458zM6.5 14h7m-5-8h-3m6 0h3");
}

.p2g73nubi {
  cx: 16.75px;
  cy: 6px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lmlzbdbgb"/><circle class="p2g73nubi"/></g>`,
		"fallback": "iconoven:oxygen-cylinder-sharp",
	});
}

export default Component;
