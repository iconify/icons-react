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
		"content": `<style>.q0f-lgkcm {
  d: path("M5 2.5h14v19H5Z");
}

.tq2j3cbfd {
  d: path("M7.5 12.5h9m-8 0v6h7v-6m0-4.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q0f-lgkcm"/><path class="tq2j3cbfd"/></g>`,
		"fallback": "uix-sharp:pet-door",
	});
}

export default Component;
