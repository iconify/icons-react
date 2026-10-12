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
		"content": `<style>.c875p0zop {
  d: path("M19.75 3.25h-3V8.5h3");
}

.d2lzq481w {
  cx: 6.75px;
  cy: 8.5px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuhh-lb2x {
  d: path("M4.75 21.25h9.5v-3.5H3.75v3.5zM9 17.75l-1.75-6.5M9.5 7.5l5.75-2");
}
</style><g class="x2cwu0gfd"><path class="yuhh-lb2x"/><circle class="d2lzq481w"/><path class="c875p0zop"/></g>`,
		"fallback": "iconoven:robot-arm-sharp",
	});
}

export default Component;
