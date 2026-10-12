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
		"content": `<style>.ac2hx5zcu {
  d: path("M6 11c-5-8.5 17-8.5 12 0M6 13c-5 8.5 17 8.5 12 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsi175mao {
  d: path("M6 10h6v4H6zm6 0h6v4h-6zm-9.25 2H6m12 0h3.25");
}
</style><g class="x2cwu0gfd"><path class="xsi175mao"/><path class="ac2hx5zcu"/></g>`,
		"fallback": "iconoven:magnet-field-sharp",
	});
}

export default Component;
