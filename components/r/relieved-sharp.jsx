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

.eolkxabco {
  d: path("M7.75 10.25L9 11.813l1.25-1.563m3.5 0L15 11.813l1.25-1.563m-9-2.75l1.4-1.05l1.6.8m6.5.25l-1.4-1.05l-1.6.8m-4.25 8l1.077 1h2.846l1.077-1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="eolkxabco"/></g>`,
		"fallback": "iconoven:relieved-sharp",
	});
}

export default Component;
