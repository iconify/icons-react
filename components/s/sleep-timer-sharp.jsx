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

.urrj1jkns {
  d: path("M9.75 2.75h4.5m-2.25 0v3m0 3.5a3.1 3.1 0 0 0 4.25 4.25A4.25 4.25 0 1 1 12 9.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="fhcsjwttb"/><path class="urrj1jkns"/></g>`,
		"fallback": "iconoven:sleep-timer-sharp",
	});
}

export default Component;
