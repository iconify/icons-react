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
		"content": `<style>.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yd_lwo2wq {
  d: path("M8 8.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm7.5-2a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-5 7.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm6 1a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="j_q_y1bdx"/><path class="yd_lwo2wq"/></g>`,
		"fallback": "uix-sharp:positioning-map",
	});
}

export default Component;
