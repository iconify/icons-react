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
		"content": `<style>.ldeojobve {
  d: path("M2.5 2.5h11v19h-11Zm11 5.5h5.25v2.5m-2.5 11v-6l1.25-2h2.75l1.25 2v6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwj5jbczl {
  d: path("m8 7l1.75 3.25a2 2 0 1 1-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="ldeojobve"/><path class="wwj5jbczl"/></g>`,
		"fallback": "uix-sharp:water-refill-machine",
	});
}

export default Component;
