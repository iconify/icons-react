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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7qockysx {
  d: path("M7.75 4.25q2.75 4.25 0 8.5m8.5-8.5q-2.75 4.25 0 8.5");
}

.zv1_2ub-a {
  d: path("M6 8.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm-3 11h6.5L11 18l1.5 3l1.5-1.5h7");
}
</style><g class="ulnmmdpxh"><path class="zv1_2ub-a"/><path class="y7qockysx"/></g>`,
		"fallback": "uix-sharp:tennis-break-point",
	});
}

export default Component;
