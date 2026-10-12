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

.j-nwlhbye {
  d: path("M7.5 8.25L10 9m6.5-.75L14 9m-6.25 2h2.5m3.5 0h2.5M8 16.25l1-1.286l1 1.286l1 1.286l1-1.286l1-1.286l1 1.286l1 1.286l1-1.286");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="j-nwlhbye"/></g>`,
		"fallback": "iconoven:nauseated-sharp",
	});
}

export default Component;
