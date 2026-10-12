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
		"content": `<style>.hjlkcc9dp {
  cx: 12px;
  cy: 11.25px;
  r: 2.75px;
}

.uz9lzcb6c {
  d: path("M7.25 21.25H17.5v-.75c0-2.25-2.53-3.75-5.5-3.75s-5.5 1.5-5.5 3.75v.75zM8.5 5.5L12 2.75l3.5 2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="hjlkcc9dp"/><path class="uz9lzcb6c"/></g>`,
		"fallback": "iconoven:promotion-sharp",
	});
}

export default Component;
