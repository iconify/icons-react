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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o-7u6qbev {
  d: path("M7.25 4h9.5A4.25 4.25 0 0 1 21 8.25V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.25A4.25 4.25 0 0 1 7.25 4M3 10.75h5m8 0h5");
}

.x9nfswuic {
  width: 3.5px;
  height: 4.5px;
  x: 10.25px;
  y: 8.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="o-7u6qbev"/><rect class="x9nfswuic"/></g>`,
		"fallback": "iconoven:treasure-chest-lock",
	});
}

export default Component;
