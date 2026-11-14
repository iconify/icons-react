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
		"content": `<style>.qt99g2xbl {
  d: path("M9.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM3 18a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm13 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM12 8v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3wnm-bmq {
  d: path("M5.5 15.5v-2A1.5 1.5 0 0 1 7 12h10a1.5 1.5 0 0 1 1.5 1.5v2");
}
</style><g class="ulnmmdpxh"><path class="qt99g2xbl"/><path class="z3wnm-bmq"/></g>`,
		"fallback": "uix-sharp:org-chart",
	});
}

export default Component;
