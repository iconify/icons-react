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
		"content": `<style>.bbjgw8b-l {
  d: path("M2.5 13v-2.5A1.5 1.5 0 0 1 4 9l3-.5l2.5-4H15l3 4l2 .5a1.5 1.5 0 0 1 1.5 1.5V13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xygi7vb-b {
  d: path("M3.75 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.75 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.75 1v5.5M20.5 16v5.5");
}
</style><g class="ulnmmdpxh"><path class="bbjgw8b-l"/><path class="xygi7vb-b"/></g>`,
		"fallback": "uix-sharp:virtual-safety-car",
	});
}

export default Component;
