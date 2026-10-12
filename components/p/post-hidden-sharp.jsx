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
		"content": `<style>.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.nreuh3ywx {
  d: path("M6.5 12C7.75 9.75 9.75 8.5 12 8.5s4.25 1.25 5.5 3.5c-1.25 2.25-3.25 3.5-5.5 3.5S7.75 14.25 6.5 12Zm.25 5.25l10.5-10.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="nreuh3ywx"/></g>`,
		"fallback": "iconoven:post-hidden-sharp",
	});
}

export default Component;
