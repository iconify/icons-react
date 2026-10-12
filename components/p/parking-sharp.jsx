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
		"content": `<style>.nhti-ubql {
  d: path("M9.75 16.75v-9.5h3.5a2.75 2.75 0 0 1 0 5.5h-3.5");
}

.okifisbho {
  d: path("M3.75 3.75h16.5v16.5H3.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="okifisbho"/><path class="nhti-ubql"/></g>`,
		"fallback": "iconoven:parking-sharp",
	});
}

export default Component;
