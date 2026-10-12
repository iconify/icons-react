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
		"content": `<style>.aldfehmne {
  cx: 4.75px;
  cy: 19px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfeak6k6r {
  d: path("M6.75 19H16V7.75m.68-4.68l3.89 1.86l.68.32l-.68.32l-3.89 1.86l-.68.32v-5z");
}
</style><g class="x2cwu0gfd"><circle class="aldfehmne"/><path class="zfeak6k6r"/></g>`,
		"fallback": "iconoven:route-end-sharp",
	});
}

export default Component;
