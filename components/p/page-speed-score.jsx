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
		"content": `<style>.hvf1rvi4c {
  d: path("M3.773 18.75a9.5 9.5 0 1 1 16.454 0");
}

.o1gpfmb0y {
  d: path("m12.75 8.5l-3.25 5H12l-.75 4l3.25-5H12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hvf1rvi4c"/><path class="o1gpfmb0y"/></g>`,
		"fallback": "uix-sharp:page-speed-score",
	});
}

export default Component;
