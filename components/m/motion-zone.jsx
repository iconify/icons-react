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
		"content": `<style>.gpftudsfg {
  d: path("M2.5 7V2.5H7m10 0h4.5V7m0 10v4.5H17m-10 0H2.5V17m8.75-10.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm1.25 4.5l-1 3.25l1.75 2l.5 3m-2.25-5L10 16.5l-1.75 1");
}

.nhfwqhnos {
  d: path("m8.5 12.5l2-1.75h2L14 12.5l2 .5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gpftudsfg"/><path class="nhfwqhnos"/></g>`,
		"fallback": "uix-sharp:motion-zone",
	});
}

export default Component;
