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
		"content": `<style>.c1vgb3brk {
  d: path("M11.7 20.5H2.5v-17h19v7.7m-19-3.45h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xlnn_bcwz {
  d: path("M7 10.5L4.5 13L7 15.5m3.5-5.5l-1.75 6m3.5-5.5l1.485 1.485m.765 3.265h7v6.25h-7Zm2-1.25v2.25m3-2.25v2.25m-5 1.75h7");
}
</style><g class="ulnmmdpxh"><path class="c1vgb3brk"/><path class="xlnn_bcwz"/></g>`,
		"fallback": "uix-sharp:query-schedule",
	});
}

export default Component;
