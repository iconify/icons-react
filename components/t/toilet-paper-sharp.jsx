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
		"content": `<style>.bdasx7b2q {
  d: path("M7.75 4.75a4.75 4.75 0 0 1 0 9.5");
}

.ps6leydqj {
  cx: 7.75px;
  cy: 9.5px;
  r: 1.5px;
}

.qxpfevs-t {
  d: path("M7.75 4.75h11.5v16.5h-8v-7h-3.5a4.75 4.75 0 0 1 0-9.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qxpfevs-t"/><path class="bdasx7b2q"/><circle class="ps6leydqj"/></g>`,
		"fallback": "iconoven:toilet-paper-sharp",
	});
}

export default Component;
