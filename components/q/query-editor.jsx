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
		"content": `<style>.hp9ld3byv {
  d: path("M2.5 3.5h19v17h-19Zm0 4.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yq73u1b8c {
  d: path("M5 10.5L7 12l-2 1.5M9 12h8m-6 4.5h3.5m2-2v4");
}
</style><g class="ulnmmdpxh"><path class="hp9ld3byv"/><path class="yq73u1b8c"/></g>`,
		"fallback": "uix-sharp:query-editor",
	});
}

export default Component;
