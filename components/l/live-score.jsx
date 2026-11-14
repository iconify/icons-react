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
		"content": `<style>.ee-1kop3g {
  d: path("M6 7.5L7.5 6v6m7-6h4v6h-4ZM11 7.5h.01m-.01 3h.01");
}

.j5p2x1bjc {
  d: path("M2.5 3h19v13h-19ZM12 16v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j5p2x1bjc"/><path class="ee-1kop3g"/></g>`,
		"fallback": "uix-sharp:live-score",
	});
}

export default Component;
