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
		"content": `<style>.aufhi6bqe {
  d: path("M15.25 11.5q.39 2.86 3.25 3.25q-2.86.39-3.25 3.25q-.39-2.86-3.25-3.25q2.86-.39 3.25-3.25Z");
}

.e9zc97yzr {
  d: path("M2.75 3.75h18.5v16.5H2.75zM3 9h18M9 9.25V20");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e9zc97yzr"/><path class="aufhi6bqe"/></g>`,
		"fallback": "iconoven:spreadsheet-ai-sharp",
	});
}

export default Component;
