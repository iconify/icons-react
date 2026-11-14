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

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}

.ztux2rbkg {
  d: path("M6 14.5c1.5-3 3-3 4-1s2.5 2 3.5 0m0 0l.75-2.5L17 8.25L18.75 10L16 12.75Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="ztux2rbkg"/></g>`,
		"fallback": "uix-sharp:story-draw",
	});
}

export default Component;
