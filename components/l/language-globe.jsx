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
		"content": `<style>.k3eot7bdy {
  d: path("M6.5 9.25a2.75 6.75 0 1 0 5.5 0a2.75 6.75 0 1 0-5.5 0Zm-4 0H16M15 21l3-6l3 6m-4.75-2h3.5");
}

.txncksb1k {
  d: path("M2.5 9.25a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 1 0-13.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="txncksb1k"/><path class="k3eot7bdy"/></g>`,
		"fallback": "uix-sharp:language-globe",
	});
}

export default Component;
