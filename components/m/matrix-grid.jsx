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
		"content": `<style>.u617ykb4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5H5.5v17H8m8-17h2.5v17H16M9.5 8h.01m4.99 0h.01M9.5 12h.01m4.99 0h.01M9.5 16h.01m4.99 0h.01");
}
</style><path class="u617ykb4f"/>`,
		"fallback": "uix:matrix-grid",
	});
}

export default Component;
