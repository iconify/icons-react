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

.yv251djew {
  d: path("M6 9.75A2.25 2.25 0 1 1 8.25 12A2.25 2.25 0 1 1 6 14.25M13.25 12a2.25 4.5 0 1 0 4.5 0a2.25 4.5 0 1 0-4.5 0Z");
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="yv251djew"/></g>`,
		"fallback": "uix-sharp:speed-limit-30",
	});
}

export default Component;
