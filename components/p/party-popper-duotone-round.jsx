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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ph4y_tb1l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m7 9l-.316.948C6.667 9.602 6.75 9.251 7 9M6 20a1.58 1.58 0 0 1-2-2l2.684-8.052c.129 2.447 4.921 7.239 7.368 7.368L15 17c-.251.25-.602.333-.948.316Z");
}

.u0sz0rbnv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 9l-3 9c-.412 1.236.764 2.412 2 2l9-3c-2 2-10-6-8-8m0 0c2-2 10 6 8 8S5 11 7 9m4-6v2m5 3l2-2m1 7h2M15 3h.01M21 9h-.01");
}
</style><g class="ft5dv1b6b"><path class="ph4y_tb1l"/><path class="u0sz0rbnv"/></g>`,
		"fallback": "coolicons:party-popper-duotone-round",
	});
}

export default Component;
