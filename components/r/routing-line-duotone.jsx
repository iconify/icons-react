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
		"content": `<style>.b8sqeq3do {
  stroke-linejoin: round;
  d: path("M20 19H7.5C5.567 19 4 17.433 4 15.5C4 13.567 5.567 12 7.5 12H16.5C18.433 12 20 10.433 20 8.5C20 6.567 18.433 5 16.5 5H8");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.cx25de5zj {
  cx: 6px;
  cy: 5px;
  r: 2px;
}

.gog0a1c5n {
  stroke-linejoin: round;
  d: path("M18 17L20 19L18 21");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><path class="b8sqeq3do"/><path class="gog0a1c5n"/><circle class="cx25de5zj"/></g>`,
		"fallback": "solar:routing-line-duotone",
	});
}

export default Component;
