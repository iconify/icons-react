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
		"content": `<style>.cpft19b8e {
  d: path("M4.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.l2gh0bx0z {
  d: path("m7.5 11.75l.75 9.75h1.5l.75-9.75");
}

.uhb4iey6s {
  d: path("M10.25 14h6.25V2.5l4 2l-4 2m-12 1h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cpft19b8e"/><path class="l2gh0bx0z"/><path class="uhb4iey6s"/></g>`,
		"fallback": "uix-sharp:mic-flag",
	});
}

export default Component;
