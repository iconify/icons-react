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
		"content": `<style>.ikirqmbyo {
  cx: 12px;
  cy: 4.25px;
  r: 1.5px;
}

.q3vpsfpne {
  d: path("M2.75 12c0-1.93 4.14-3.5 9.25-3.5s9.25 1.57 9.25 3.5s-4.14 3.5-9.25 3.5s-9.25-1.57-9.25-3.5ZM5 14.4v6.85m14-6.85v6.85m-7-5.75v5.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="q3vpsfpne"/><circle class="ikirqmbyo"/></g>`,
		"fallback": "iconoven:trampoline-sharp",
	});
}

export default Component;
