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
		"content": `<style>.f_9jo_b3i {
  d: path("M11.6 20.5H2.5v-17h19v8.1m-19-3.85h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zb90ttbiy {
  d: path("M7 10.5L4.5 13L7 15.5m3.5-5.5l-1.75 6m3.5-5.5l1.626 1.626M15 15l6 6m0-6l-6 6");
}
</style><g class="ulnmmdpxh"><path class="f_9jo_b3i"/><path class="zb90ttbiy"/></g>`,
		"fallback": "uix-sharp:query-error",
	});
}

export default Component;
