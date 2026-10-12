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
		"content": `<style>.c4sg-rw9q {
  d: path("m12 2.75l2.25 1.5v9h-4.5v-9z");
}

.h17i4ccng {
  d: path("M9.75 8.25L12 9.75l2.25-1.5m-2.25 5v8m0-2.5l-2.684-.895L8.5 15m3.5 2.25l2.438-.812L15.25 14");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="c4sg-rw9q"/><path class="h17i4ccng"/></g>`,
		"fallback": "iconoven:lavender-sharp",
	});
}

export default Component;
