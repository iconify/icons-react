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
		"content": `<style>.b4hwpzblw {
  d: path("M2.5 6h11v11h-11Z");
}

.rs_3xdb7l {
  d: path("M4 18.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM16.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM5.25 11.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b4hwpzblw"/><path class="rs_3xdb7l"/></g>`,
		"fallback": "uix-sharp:tennis-ball-machine",
	});
}

export default Component;
