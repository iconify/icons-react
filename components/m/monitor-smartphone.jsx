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
		"content": `<style>.iokifkb4l {
  d: path("M14.5 9.5h7v12h-7Zm-7 6v5m-3 0h6m6.75-1.75h1.5");
}

.spx16kbxu {
  d: path("M11.5 15.5h-7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="spx16kbxu"/><path class="iokifkb4l"/></g>`,
		"fallback": "uix-sharp:monitor-smartphone",
	});
}

export default Component;
