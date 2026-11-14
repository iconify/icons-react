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
		"content": `<style>.edgk8bbrx {
  d: path("M4 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.t7g7oknzd {
  d: path("M4 7.5v12l2.25-1l2.25 1l2.25-1l.926.412M13 12.249V10M7.5 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm7 7.5H16c0 1.25.75 1.75 2 1.75s2-.5 2-1.75h1.5v6.5h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="edgk8bbrx"/><path class="t7g7oknzd"/></g>`,
		"fallback": "uix-sharp:plastic-bag-roll",
	});
}

export default Component;
