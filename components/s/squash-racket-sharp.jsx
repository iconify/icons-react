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
		"content": `<style>.k10f36bcw {
  d: path("m5.25 11.6l2.25 3.9l2.25-3.9M7.5 15.5v5.75M21.25 9v12.25m-3.75-3.5h3.75");
}

.r159tcbbe {
  cx: 16.25px;
  cy: 12px;
  r: 1.75px;
}

.sq6mkcb4j {
  d: path("M7.5 2.75a3.5 5 0 1 0 0 10a3.5 5 0 1 0 0-10Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sq6mkcb4j"/><path class="k10f36bcw"/><circle class="r159tcbbe"/></g>`,
		"fallback": "iconoven:squash-racket-sharp",
	});
}

export default Component;
