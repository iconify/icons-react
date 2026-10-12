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
		"content": `<style>.fobco7e6j {
  d: path("M2.75 12.5a4.5 1.5 0 1 0 9 0a4.5 1.5 0 1 0-9 0Zm12-3.5a3.25 1.25 0 1 0 6.5 0a3.25 1.25 0 1 0-6.5 0Zm1 6.5h4.5");
}

.gn9o02m8q {
  d: path("M2.75 12.5a4.5 1.5 0 0 0 9 0c0 5-1.5 8.75-4.5 8.75s-4.5-3.75-4.5-8.75Zm12-3.5a3.25 1.25 0 0 0 6.5 0l-.75 11v1.25h-5V20Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gn9o02m8q"/><path class="fobco7e6j"/></g>`,
		"fallback": "iconoven:tabla-sharp",
	});
}

export default Component;
