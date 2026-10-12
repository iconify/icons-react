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
		"content": `<style>.al-4xrb9u {
  d: path("M3 4h18v16H3zm6 0v2.5M15 20v-2.5M3 9.33h2.5M21 14.67h-2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmwlfxb5f {
  cx: 15px;
  cy: 9.33px;
  r: 1.25px;
}
</style><g class="x2cwu0gfd"><path class="al-4xrb9u"/><circle class="zmwlfxb5f"/></g>`,
		"fallback": "iconoven:rule-of-thirds-sharp",
	});
}

export default Component;
