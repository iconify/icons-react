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
		"content": `<style>.bar2ni9_y {
  d: path("M3 10h10.5l7 2v1H15v5h-3v-8m-7.5 0l-1-4m9 4L14 5.5m-2 0h4");
}

.m51o-n-ot {
  d: path("M2.75 16.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm14.5 1a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m51o-n-ot"/><path class="bar2ni9_y"/></g>`,
		"fallback": "uix-sharp:ride-on-mower",
	});
}

export default Component;
