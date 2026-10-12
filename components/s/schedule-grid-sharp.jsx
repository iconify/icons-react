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
		"content": `<style>.aof5h9brq {
  d: path("M3.25 3.25h17.5v17.5H3.25zm0 5h17.5m-12.5 0v12.5m-3-8.75h1m-1 5h1");
}

.klntv9bgc {
  d: path("M10.75 10.75h7v2.5h-7zm0 5h4.5v2.5h-4.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aof5h9brq"/><path class="klntv9bgc"/></g>`,
		"fallback": "iconoven:schedule-grid-sharp",
	});
}

export default Component;
