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

.xj4eupmue {
  d: path("M7 3.5Q4.5 3.5 4.5 6v4q0 2-2 2q2 0 2 2v4q0 2.5 2.5 2.5m10-17q2.5 0 2.5 2.5v4q0 2 2 2q-2 0-2 2v4q0 2.5-2.5 2.5M8 12c1-2.25 2.5-3.25 4-3.25s3 1 4 3.25c-1 2.25-2.5 3.25-4 3.25s-3-1-4-3.25Z");
}

.zq8-gg7ek {
  fill: currentColor;
  d: path("M10.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="xj4eupmue"/><path class="zq8-gg7ek"/></g>`,
		"fallback": "uix-sharp:json-viewer",
	});
}

export default Component;
