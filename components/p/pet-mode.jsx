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
		"content": `<style>.bq-mve60m {
  d: path("M9.5 16.5a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x31jdbctj {
  d: path("m4 10.5l8-7l8 7V20H4Zm5.25 2.75h.01M11 11.5h.01m1.99 0h.01m1.74 1.75h.01");
}
</style><g class="ulnmmdpxh"><path class="x31jdbctj"/><path class="bq-mve60m"/></g>`,
		"fallback": "uix-sharp:pet-mode",
	});
}

export default Component;
