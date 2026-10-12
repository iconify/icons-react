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
		"content": `<style>.t7f4iacij {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 14.5l1.75-8L4.833 5h14.334l.333 1.5l1.75 8Zm9.25 0l-3.75-6M12 21.25v-3.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x9eatmb0p {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 18.75h.01M9.5 17h.01m4.99 0h.01m1.99 1.75h.01");
}
</style><g class="ux2u0rbkq"><path class="t7f4iacij"/><path class="x9eatmb0p"/></g>`,
		"fallback": "iconoven:washer-fluid-sharp",
	});
}

export default Component;
