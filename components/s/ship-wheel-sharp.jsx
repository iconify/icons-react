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
		"content": `<style>.qons09bew {
  d: path("M12 5.75a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 1 0 0-12.5ZM14.25 12h7m-7.66 1.59l4.95 4.95M12 14.25v7m-1.59-7.66l-4.95 4.95M9.75 12h-7m7.66-1.59L5.46 5.46M12 9.75v-7m1.59 7.66l4.95-4.95");
}

.rzyzgqcqn {
  cx: 12px;
  cy: 12px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qons09bew"/><circle class="rzyzgqcqn"/></g>`,
		"fallback": "iconoven:ship-wheel-sharp",
	});
}

export default Component;
