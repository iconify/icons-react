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
		"content": `<style>.g-maqic6e {
  d: path("m11.25 10.25l.75-.5v4.5M17.5 12h2.25m-1.12-1.12v2.25");
}

.vypw0ntxa {
  d: path("M2.75 7.25h18.5v9.5H2.75zm5.25 0v9.5m8-9.5v9.5M4.5 12h2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vypw0ntxa"/><path class="g-maqic6e"/></g>`,
		"fallback": "iconoven:quantity-stepper-sharp",
	});
}

export default Component;
