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
		"content": `<style>.lu5m3c4vj {
  d: path("M5.5 13.5c2.25.75 4.5 1 6.5 1s4.25-.25 6.5-1m-11-8.75c2.75-2.5 6.25-2.5 9 0c-2.75 2.5-6.25 2.5-9 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydar16b-d {
  d: path("M2.75 13.5c3-3.5 6-4.5 9.25-2.75C15.25 9 18.25 10 21.25 13.5c-3 3.75-6 5.5-9.25 5.5s-6.25-1.75-9.25-5.5Z");
}
</style><g class="x2cwu0gfd"><path class="ydar16b-d"/><path class="lu5m3c4vj"/></g>`,
		"fallback": "iconoven:lip-reading-sharp",
	});
}

export default Component;
