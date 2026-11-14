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
		"content": `<style>.ds3qmebyn {
  d: path("M2.5 21.5q3.5-6 8-8.5l4.75-5.25M10.5 13l-4-4.25m4 4.25l5.25 2.75");
}

.piywmldwy {
  d: path("M5.25 4.75a1.5 1.5 0 1 1 2.5 0a1.5 1.5 0 1 1 1 2.5a1.5 1.5 0 1 1-2.25 1.5a1.5 1.5 0 1 1-2.25-1.5a1.5 1.5 0 1 1 1-2.5Zm11 .5a1.5 1.5 0 1 1 2.5 0a1.5 1.5 0 1 1 1 2.5a1.5 1.5 0 1 1-2.25 1.5a1.5 1.5 0 1 1-2.25-1.5a1.5 1.5 0 1 1 1-2.5Zm-.5 10.5a1.5 1.5 0 1 1 2.5 0a1.5 1.5 0 1 1 1 2.5a1.5 1.5 0 1 1-2.25 1.5a1.5 1.5 0 1 1-2.25-1.5a1.5 1.5 0 1 1 1-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="piywmldwy"/><path class="ds3qmebyn"/></g>`,
		"fallback": "uix-sharp:spring-blossom",
	});
}

export default Component;
