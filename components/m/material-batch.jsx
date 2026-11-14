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
		"content": `<style>.tn_sjwlmm {
  d: path("M7.5 9H12v4.5H7.5ZM12 9h4.5v4.5H12ZM9.75 4.5h4.5V9h-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uy51d2b0b {
  d: path("m3.5 10l2 10h13l2-10");
}
</style><g class="ulnmmdpxh"><path class="uy51d2b0b"/><path class="tn_sjwlmm"/></g>`,
		"fallback": "uix-sharp:material-batch",
	});
}

export default Component;
