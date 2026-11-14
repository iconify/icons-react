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

.vo68gduty {
  d: path("M5 19V8.5C5 5 6.5 3 9 2.5q3 3.5 6 0c2.5.5 4 2.5 4 6V19Z");
}

.w4stdebjr {
  d: path("M9.5 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM5 9l4.75 2.5m4.5 2L19 16m0-7l-4.75 2.5m-4.5 2L5 16m7-1v6.5");
}
</style><g class="ulnmmdpxh"><path class="vo68gduty"/><path class="w4stdebjr"/></g>`,
		"fallback": "uix-sharp:strongman-harness",
	});
}

export default Component;
