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

.uytecdbzs {
  d: path("M6.25 8.25H8l1.5-2.5l2 5l2-5l1.5 2.5h2.75m-12 5.25h4.5V18h-4.5zm8 0h4.5V18h-4.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="uytecdbzs"/></g>`,
		"fallback": "iconoven:sampler-pad-sharp",
	});
}

export default Component;
