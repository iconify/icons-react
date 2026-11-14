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
		"content": `<style>.liu14zbck {
  d: path("M4.75 10h2.5v2.5h-2.5Zm6 0h2.5v2.5h-2.5Zm6 0h2.5v2.5h-2.5Z");
}

.qm8smsbpr {
  d: path("M3 6.5q9-3 18 0V15a3 3 0 0 1-6 0a3 3 0 0 1-6 0a3 3 0 0 1-6 0Zm4.25 4.75h9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qm8smsbpr"/><path class="liu14zbck"/></g>`,
		"fallback": "uix-sharp:lingual-braces",
	});
}

export default Component;
