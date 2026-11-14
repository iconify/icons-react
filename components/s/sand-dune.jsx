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
		"content": `<style>.ep1vzmbwa {
  d: path("M2.5 19C8 18 11 9 16 9c1.5 0 3.5 5 5.5 10Z");
}

.o8rsmob_i {
  d: path("M10.5 16q2.5-1.75 5-.5M3.5 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ep1vzmbwa"/><path class="o8rsmob_i"/></g>`,
		"fallback": "uix-sharp:sand-dune",
	});
}

export default Component;
