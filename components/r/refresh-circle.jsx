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
		"content": `<style>.hbkond58l {
  d: path("m5.5 14l2-2l2 2");
}

.j1qb57b4m {
  d: path("m14.5 10l2 2l2-2m-2.603 4.25A4.5 4.5 0 0 1 7.5 12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whvb58bhv {
  d: path("M8.103 9.75A4.5 4.5 0 0 1 16.5 12");
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="whvb58bhv"/><path class="j1qb57b4m"/><path class="hbkond58l"/></g>`,
		"fallback": "uix-sharp:refresh-circle",
	});
}

export default Component;
