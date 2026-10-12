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
		"content": `<style>.fycpqq3xc {
  d: path("m8.5 11.25l3 3L20.25 5");
}

.tsah-tbjq {
  d: path("M20.25 12v8.25H3.75V3.75H14.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tsah-tbjq"/><path class="fycpqq3xc"/></g>`,
		"fallback": "iconoven:task-queue-sharp",
	});
}

export default Component;
