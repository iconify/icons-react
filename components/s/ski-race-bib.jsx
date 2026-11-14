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
		"content": `<style>.kdl7mbcxf {
  d: path("M8 3a4 4 0 0 0 8 0h4l1 18H3L4 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsr9-kbpa {
  d: path("M7 9.5h10v6H7Zm-1 8.75h.01m11.99 0h.01");
}
</style><g class="ulnmmdpxh"><path class="kdl7mbcxf"/><path class="wsr9-kbpa"/></g>`,
		"fallback": "uix-sharp:ski-race-bib",
	});
}

export default Component;
