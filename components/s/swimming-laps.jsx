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
		"content": `<style>.gngt2zx8k {
  d: path("M3 5.5q2.25-2.5 4.5 0t4.5 0t4.5 0t4.5 0M3 11q2.25-2.5 4.5 0t4.5 0q2.187-2.43 4.375-.135m2.01 1.352Q19.693 12.453 21 11m-.25 7.5A2.75 2.75 0 1 1 18 15.75");
}

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gngt2zx8k"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:swimming-laps",
	});
}

export default Component;
