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
		"content": `<style>.g1g82abza {
  d: path("M2.5 3.5H7a2 2 0 0 1 2 2V8");
}

.q6e0agblr {
  d: path("M5 12a4 4 0 0 1 8 0Zm1.5 2.5l-1 4m3.5-4v4m2.5-4L12 18m4.75-4.75h.01m-.26 2.5v2.75h3l1.5 3m-6.25-3a2.5 2.5 0 0 0 3.25 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g1g82abza"/><path class="q6e0agblr"/></g>`,
		"fallback": "uix-sharp:roll-in-shower",
	});
}

export default Component;
