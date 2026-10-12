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
		"content": `<style>.drbi0rnnl {
  d: path("M3.75 12a8.25 8.25 0 1 0 2.42-5.83L3.75 8.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5i8e4b9v {
  d: path("M3.75 3.75v4.5h4.5m-.75 2l1.5-1v5.5m5.5-5.5H16v5.5h-3v-5.5z");
}
</style><g class="x2cwu0gfd"><path class="drbi0rnnl"/><path class="z5i8e4b9v"/></g>`,
		"fallback": "iconoven:skip-back-10-sharp",
	});
}

export default Component;
