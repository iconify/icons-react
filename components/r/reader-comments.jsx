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
		"content": `<style>.bq6_oza6z {
  d: path("M7 7.5V5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H16M6 11h6.5M6 14h4");
}

.j0vu13bvu {
  d: path("M2.5 9.5a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8l-3.5 3v-3a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j0vu13bvu"/><path class="bq6_oza6z"/></g>`,
		"fallback": "uix-sharp:reader-comments",
	});
}

export default Component;
