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
		"content": `<style>.py2-63mnj {
  d: path("m11.47 18.34l1.1-1.1");
}

.wzmpwobhr {
  d: path("M17.39 3.97a5.08 5.08 0 0 0-6.57 6.94l-6.8 6.8a1.6 1.6 0 0 0 2.27 2.27l6.8-6.8a5.08 5.08 0 0 0 6.94-6.57l-3.34 3.35l-2.65-2.65Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xc7q9zb4s {
  cx: 11.47px;
  cy: 18.34px;
  r: 2.5px;
}
</style><g class="x2cwu0gfd"><path class="wzmpwobhr"/><circle class="xc7q9zb4s"/><path class="py2-63mnj"/></g>`,
		"fallback": "iconoven:torque-wrench-sharp",
	});
}

export default Component;
