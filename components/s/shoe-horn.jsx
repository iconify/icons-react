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
		"content": `<style>.te0pmeqpg {
  d: path("M2.5 13H8l4.5 2.5c3.5.5 9 .75 9 3.75v.5h-19Zm0 6.75h4v1.75h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uu3ib1x9u {
  d: path("M5 15L8.75 2.5h2.5L8 15.5ZM9.75 4.25h.01");
}
</style><g class="ulnmmdpxh"><path class="te0pmeqpg"/><path class="uu3ib1x9u"/></g>`,
		"fallback": "uix-sharp:shoe-horn",
	});
}

export default Component;
