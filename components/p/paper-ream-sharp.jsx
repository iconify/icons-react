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
		"content": `<style>.n2k6cws6i {
  d: path("M6.75 3.25h10.5m-12.5 3h14.5m-16.5 3h18.5v12H2.75z");
}

.tzx9jpayz {
  d: path("M7.25 12.75h9.5v5h-9.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n2k6cws6i"/><path class="tzx9jpayz"/></g>`,
		"fallback": "iconoven:paper-ream-sharp",
	});
}

export default Component;
