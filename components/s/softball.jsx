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
		"content": `<style>.e1_poib1n {
  d: path("M6 4.75a10.25 10.25 0 0 1 0 14.5m12-14.5a10.25 10.25 0 0 0 0 14.5M7 8h2.5m-1.75 4h2.5M7 16h2.5m5-8H17m-3.25 4h2.5m-1.75 4H17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="e1_poib1n"/></g>`,
		"fallback": "uix-sharp:softball",
	});
}

export default Component;
