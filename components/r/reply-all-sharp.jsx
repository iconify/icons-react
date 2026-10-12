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
		"content": `<style>.ayd36ibye {
  d: path("M8.5 10.5h5.75a6 6 0 0 1 6 6v2");
}

.fdmk6kshg {
  d: path("M8 6.25L3.75 10.5L8 14.75m4.75-8.5L8.5 10.5l4.25 4.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fdmk6kshg"/><path class="ayd36ibye"/></g>`,
		"fallback": "iconoven:reply-all-sharp",
	});
}

export default Component;
