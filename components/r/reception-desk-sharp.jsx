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
		"content": `<style>.g828vzbqg {
  cx: 12px;
  cy: 5px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yowu4vb0n {
  d: path("M6.75 13.25c.4-1.9 2.5-3 5.25-3s4.85 1.1 5.25 3Zm-4 0h18.5v8H2.75zm0 3h18.5");
}
</style><g class="x2cwu0gfd"><circle class="g828vzbqg"/><path class="yowu4vb0n"/></g>`,
		"fallback": "iconoven:reception-desk-sharp",
	});
}

export default Component;
