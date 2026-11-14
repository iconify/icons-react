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
		"content": `<style>.qb26xtt_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6v13.5M19.5 6v13.5m-17 2h4l-1-2h-2Zm15 0h4l-1-2h-2ZM3 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm15 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM4.5 7.5c2.5 8 12.5 8 15 0");
}
</style><path class="qb26xtt_n"/>`,
		"fallback": "uix-sharp:rope-barrier",
	});
}

export default Component;
