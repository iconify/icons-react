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
		"content": `<style>.bho_9sbzi {
  d: path("m12.88 3.23l6.49 3.54l.88.48v9.5l-.88.48l-6.49 3.54l-.88.48l-.88-.48l-6.49-3.54l-.88-.48v-9.5l.88-.48l6.49-3.54l.88-.48z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xstit-bgo {
  d: path("m12.88 3.23l6.49 3.54l.88.48l-.88.48l-6.49 3.54l-.88.48l-.88-.48l-6.49-3.54l-.88-.48l.88-.48l6.49-3.54l.88-.48zM12 11.75v9.5M3.75 12L12 16.5l8.25-4.5");
}
</style><g class="x2cwu0gfd"><path class="bho_9sbzi"/><path class="xstit-bgo"/></g>`,
		"fallback": "iconoven:lut-cube-sharp",
	});
}

export default Component;
