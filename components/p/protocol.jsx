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

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}

.zjlc3cu0q {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8 11.25h.01M8 14.75h.01M8 18.25h.01m2.99-7h4.5m-4.5 3.5h5m-5 3.5h3");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="zjlc3cu0q"/></g>`,
		"fallback": "uix-sharp:protocol",
	});
}

export default Component;
