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
		"content": `<style>.jo45v1frk {
  cx: 19px;
  cy: 5px;
  r: 2.25px;
}

.rw6s5dbin {
  d: path("M2.75 5.75h15.5v12.5H2.75zm3.5 4.5h8.5m-8.5 3.5h4m2 0h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rw6s5dbin"/><circle class="jo45v1frk"/></g>`,
		"fallback": "iconoven:live-caption-bubble-sharp",
	});
}

export default Component;
