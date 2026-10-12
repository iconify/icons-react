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
		"content": `<style>.n8nsxjbwk {
  d: path("M8.75 10.5H10m3.5-4.75V7m4.75 3.5H17m-3.5 0l2.75-2.75M8 16l-4 4m-1.25-1.25l2.5 2.5");
}

.wua4mheyz {
  cx: 13.5px;
  cy: 10.5px;
  r: 7.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="wua4mheyz"/><path class="n8nsxjbwk"/></g>`,
		"fallback": "iconoven:pressure-gauge-sharp",
	});
}

export default Component;
