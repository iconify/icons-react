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
		"content": `<style>.be03zdb6x {
  d: path("M3.5 9L12 4.75L20.5 9L12 13.25Zm3 2.25v4.25c0 1.491 2.469 2.981 5.444 3m5.556-6.551v-.699");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ur0npetif {
  d: path("M16.75 18a1.25 3.25 0 1 0 2.5 0a1.25 3.25 0 1 0-2.5 0Z");
}

.yxebhxgav {
  d: path("m12 9l-7.5 1.5V15m10.25 3a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm0 0h6.5");
}
</style><g class="ulnmmdpxh"><path class="be03zdb6x"/><path class="yxebhxgav"/><path class="ur0npetif"/></g>`,
		"fallback": "uix-sharp:loan-education-abroad",
	});
}

export default Component;
