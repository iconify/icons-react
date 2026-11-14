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
		"content": `<style>.ctxb9ubwr {
  d: path("M2.5 5h19v14h-19ZM12 5v14");
}

.p1q46pbsh {
  d: path("M9.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM2.5 9h3v6h-3m19-6h-3v6h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ctxb9ubwr"/><path class="p1q46pbsh"/></g>`,
		"fallback": "uix-sharp:sports-ground",
	});
}

export default Component;
