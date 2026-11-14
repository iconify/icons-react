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
		"content": `<style>.guxb9khka {
  d: path("m8.5 17.5l3-3h8m-14 4h.01");
}

.lnjedcckg {
  d: path("M13.25 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM11.5 21.5V14a4 4 0 0 1 8 0v7.5m-17-6h6v6h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lnjedcckg"/><path class="guxb9khka"/></g>`,
		"fallback": "uix-sharp:tape-measure-body",
	});
}

export default Component;
