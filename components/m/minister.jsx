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
		"content": `<style>.o8_agubew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.472 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.49 0 .963.039M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm7.75 9.25h7.5v5.25h-7.5Zm2.5 0v-1.5h2.5v1.5");
}
</style><path class="o8_agubew"/>`,
		"fallback": "uix-sharp:minister",
	});
}

export default Component;
