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
		"content": `<style>.fhcsjwttb {
  cx: 12px;
  cy: 13.5px;
  r: 7.75px;
}

.pk31s2plh {
  d: path("M10 2.75h4m-2 0v3M17.5 8l1.75-1.75M6.5 8L4.75 6.25M12 13.5V8.25a5.25 5.25 0 0 1 4.55 2.63Zm0 0l-3 1.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="fhcsjwttb"/><path class="pk31s2plh"/></g>`,
		"fallback": "iconoven:stopwatch-lap-sharp",
	});
}

export default Component;
