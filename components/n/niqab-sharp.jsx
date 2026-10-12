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
		"content": `<style>.ak-925b-h {
  d: path("M3 21.25c0-3.75 2-5.75 4-6.5C5.75 13 5.25 11 5.25 9.5a6.75 6.75 0 0 1 13.5 0c0 1.5-.5 3.5-1.75 5.25c2 .75 4 2.75 4 6.5Z");
}

.qt1pl8b0o {
  d: path("M8 7.75h8v3.75H8zM8.75 15L12 16.444L15.25 15m-6.5 3.25L12 19.694l3.25-1.444");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ak-925b-h"/><path class="qt1pl8b0o"/></g>`,
		"fallback": "iconoven:niqab-sharp",
	});
}

export default Component;
