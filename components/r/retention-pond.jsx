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
		"content": `<style>.jts46hb1k {
  d: path("M7.5 16q2.25-2 4.5 0t4.5 0M12 2.5v7M9.5 7L12 9.5L14.5 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8c-lqb_g {
  d: path("M2 12.5h2q1 8 8 8t8-8h2");
}
</style><g class="ulnmmdpxh"><path class="w8c-lqb_g"/><path class="jts46hb1k"/></g>`,
		"fallback": "uix-sharp:retention-pond",
	});
}

export default Component;
