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
		"content": `<style>.ij2zo5w_t {
  d: path("m8.5 5.5l.75 2h2l-1.5 1.25l.5 2.25L8.5 9.75L6.75 11l.5-2.25l-1.5-1.25h2Z");
}

.o5_cin0ts {
  d: path("M2.5 8.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm10.25 4.25L21 21m-5-5l2-2m1 5l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o5_cin0ts"/><path class="ij2zo5w_t"/></g>`,
		"fallback": "uix-sharp:key-to-the-city",
	});
}

export default Component;
