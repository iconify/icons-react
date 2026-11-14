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
		"content": `<style>.ggpzoebve {
  d: path("M6.5 21.5V18C4.25 16.5 3 14 3 11.25C3 7 6 4 10 4c3.25 0 5.5 2.25 5.5 5.5l1.25 2.5c.25.5-.1.75-.75.75h-.5V17c0 .85-.65 1.5-1.5 1.5h-1.5v3");
}

.kdn31dvqc {
  d: path("m16.217 14.226l5.324 3.728l-1.433 2.048l-5.325-3.728Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ggpzoebve"/><path class="kdn31dvqc"/></g>`,
		"fallback": "uix-sharp:person-brushing-teeth",
	});
}

export default Component;
