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
		"content": `<style>.h4s22dbpt {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0Z");
}

.tfzrd5b1g {
  d: path("m12 6l2.25 6L12 18l-2.25-6Zm-2.25 6h4.5M6.5 12h.01m10.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h4s22dbpt"/><path class="tfzrd5b1g"/></g>`,
		"fallback": "uix-sharp:magnetic-compass-rose",
	});
}

export default Component;
