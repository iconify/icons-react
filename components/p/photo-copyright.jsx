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
		"content": `<style>.en6l96hpd {
  d: path("M10.2 17.5H2.5v-14h17v7");
}

.p1_0o6-ij {
  d: path("m5.5 14l3.25-3.75l2.75 3M13 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 9.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y31d1_bxl {
  d: path("M18.75 16.25a1.75 1.75 0 1 0 0 2.5");
}
</style><g class="ulnmmdpxh"><path class="en6l96hpd"/><path class="p1_0o6-ij"/><path class="y31d1_bxl"/></g>`,
		"fallback": "uix-sharp:photo-copyright",
	});
}

export default Component;
