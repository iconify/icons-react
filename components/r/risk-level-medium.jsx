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
		"content": `<style>.kegw5cbeq {
  fill: currentColor;
  d: path("M3 14h4v6.5H3Zm7-4.5h4v11h-4Z");
}

.mb1lhd4rz {
  d: path("M17 4h4v16.5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kegw5cbeq"/><path class="mb1lhd4rz"/></g>`,
		"fallback": "uix-sharp:risk-level-medium",
	});
}

export default Component;
