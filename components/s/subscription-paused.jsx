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
		"content": `<style>.ctq0t5yes {
  d: path("M5.938 8.5A7 7 0 0 1 19 12");
}

.s3bopeb2m {
  d: path("M7.5 14.5L5 12l-2.5 2.5m8-5v5m3-5v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhrqxgm1n {
  d: path("M16.5 9.5L19 12l2.5-2.5m-3.438 6A7 7 0 0 1 5 12");
}
</style><g class="ulnmmdpxh"><path class="ctq0t5yes"/><path class="vhrqxgm1n"/><path class="s3bopeb2m"/></g>`,
		"fallback": "uix-sharp:subscription-paused",
	});
}

export default Component;
