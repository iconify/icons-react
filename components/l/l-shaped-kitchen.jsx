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
		"content": `<style>.jlaaxj_te {
  d: path("M2.5 2.5h19V12H12v9.5H2.5Z");
}

.q09bn0ihf {
  d: path("M5.25 7.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jlaaxj_te"/><path class="q09bn0ihf"/></g>`,
		"fallback": "uix-sharp:l-shaped-kitchen",
	});
}

export default Component;
