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
		"content": `<style>.nkh1ch2wx {
  d: path("M9 17v-6.5M18 3q.5 2.5 3 3q-2.5.5-3 3q-.5-2.5-3-3q2.5-.5 3-3Z");
}

.ps231sxts {
  d: path("M6 13.25V5.5a3 3 0 0 1 6 0v7.75a4.75 4.75 0 1 1-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zncr1ccif {
  fill: currentColor;
  d: path("M7 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="ps231sxts"/><path class="zncr1ccif"/><path class="nkh1ch2wx"/></g>`,
		"fallback": "uix-sharp:temperature-ai",
	});
}

export default Component;
