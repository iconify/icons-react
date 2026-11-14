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
		"content": `<style>.b8renebth {
  d: path("m4 11.5l3.5 5.75L11 11.5l3.5 5.75L18 11.5M13 5l8.5-2.5");
}

.llj5xz9rz {
  d: path("M4 6a7 2.5 0 1 0 14 0A7 2.5 0 1 0 4 6Z");
}

.o6mud2b1x {
  d: path("M4 6v12.5a7 2.5 0 0 0 14 0V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="llj5xz9rz"/><path class="o6mud2b1x"/><path class="b8renebth"/></g>`,
		"fallback": "uix-sharp:samba-drum",
	});
}

export default Component;
