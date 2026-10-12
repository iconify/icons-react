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
		"content": `<style>.aioe8k0ii {
  d: path("M15.75 9a3 3 0 0 0 0 6Z");
}

.qp45nix1v {
  d: path("M2.75 6.5h18.5v11H2.75z");
}

.qy61aob5q {
  cx: 15.75px;
  cy: 12px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qp45nix1v"/><circle class="qy61aob5q"/><path class="aioe8k0ii"/></g>`,
		"fallback": "iconoven:theme-toggle-sharp",
	});
}

export default Component;
