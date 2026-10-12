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
		"content": `<style>.j985bibko {
  d: path("M6.5 12a5.5 5.5 0 0 1 11 0Zm5.5 0v5.5H9.5v-1.25");
}

.p95o4hbbt {
  d: path("M2.75 3.75h18.5v17.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="p95o4hbbt"/><path class="j985bibko"/></g>`,
		"fallback": "iconoven:keep-dry-sharp",
	});
}

export default Component;
