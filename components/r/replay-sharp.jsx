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

.e8t1dcqyv {
  d: path("M3.75 3.75v4.5h4.5m2.68 1.42l3.14 1.91l.68.42l-.68.42l-3.14 1.91l-.68.42v-5.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="drbi0rnnl"/><path class="e8t1dcqyv"/></g>`,
		"fallback": "iconoven:replay-sharp",
	});
}

export default Component;
