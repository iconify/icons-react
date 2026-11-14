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
		"content": `<style>.c3vm9wrum {
  d: path("M4.25 10a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 21.5c0-3.5 2.25-5.5 5-5.5s5 2 5 5.5m1.5-19h6A1.5 1.5 0 0 1 21.5 4v5.5A1.5 1.5 0 0 1 20 11h-4l-2.5 2v-2a1.5 1.5 0 0 1-1-1.5V4A1.5 1.5 0 0 1 14 2.5Zm1 2.25v4");
}

.ed8embbyn {
  d: path("M15 7a1.25 1.25 0 0 1 2.5 0v1.75m2-2v2m0-4h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c3vm9wrum"/><path class="ed8embbyn"/></g>`,
		"fallback": "uix-sharp:team-introduction",
	});
}

export default Component;
