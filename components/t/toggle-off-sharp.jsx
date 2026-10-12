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
		"content": `<style>.qhvrk_ymv {
  cx: 8.25px;
  cy: 12px;
  r: 3px;
}

.qp45nix1v {
  d: path("M2.75 6.5h18.5v11H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qp45nix1v"/><circle class="qhvrk_ymv"/></g>`,
		"fallback": "iconoven:toggle-off-sharp",
	});
}

export default Component;
