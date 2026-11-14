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
		"content": `<style>.g44ydob1w {
  d: path("M6 2.75c-2 0-3.25 1.5-3.25 3.5S4 9.75 6 9.75c1 0 1.75-.5 1.5-1.5c-.25-.75-1-1.25-1-2s.75-1.25 1-2c.25-1-.5-1.5-1.5-1.5Zm12 7c2 0 3.25-1.5 3.25-3.5S20 2.75 18 2.75c-1 0-1.75.5-1.5 1.5c.25.75 1 1.25 1 2s-.75 1.25-1 2c-.25 1 .5 1.5 1.5 1.5Zm-9 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yga4ootee {
  d: path("M6.5 6.25c2.5 2.25 3.75 5.25 4 9.25m7-9.25c-2.5 2.25-3.75 5.25-4 9.25");
}
</style><g class="ulnmmdpxh"><path class="g44ydob1w"/><path class="yga4ootee"/></g>`,
		"fallback": "uix-sharp:urinary-tract",
	});
}

export default Component;
