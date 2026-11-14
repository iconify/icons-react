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
		"content": `<style>.gh1_j_ngm {
  d: path("m12 6.5l1.25 2.75l3 .25l-2.25 2l.75 3.25L12 13l-2.75 1.75l.75-3.25l-2.25-2l3-.25Z");
}

.rkdooe55p {
  d: path("m12 2.5l7.5 3V11c0 5-3 8.5-7.5 10.5c-4.5-2-7.5-5.5-7.5-10.5V5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rkdooe55p"/><path class="gh1_j_ngm"/></g>`,
		"fallback": "uix-sharp:security-badge",
	});
}

export default Component;
