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

.urt6fnu2j {
  d: path("m7.5 8.25l2.25 1.5l-2.25 1.5m9-3l-2.25 1.5l2.25 1.5m-9.5 2h10a5 5 0 0 1-10 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="urt6fnu2j"/></g>`,
		"fallback": "iconoven:laugh-sharp",
	});
}

export default Component;
