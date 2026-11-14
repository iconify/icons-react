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
		"content": `<style>.d0orvvtll {
  d: path("M19.75 18.25v3.25m-3.5-10L10 9.5");
}

.ggw5jfb2i {
  fill: currentColor;
  d: path("M16.5 9.5c3.5-.5 5.25 2 5.25 4.5c0 2.75-2 4.5-5 4.75c-1-3-1-6.25-.25-9.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vg_wgekeh {
  d: path("M8 21.5v-4c-2.5-1.75-3.5-4.25-3.5-7C4.5 6.25 7.75 3 12 3c2.86 0 5.208 1.406 6.315 3.669");
}
</style><g class="ulnmmdpxh"><path class="vg_wgekeh"/><path class="ggw5jfb2i"/><path class="d0orvvtll"/></g>`,
		"fallback": "uix-sharp:oxygen-mask",
	});
}

export default Component;
