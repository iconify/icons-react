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
		"content": `<style>.eyf36hb2s {
  d: path("M5.75 12H9m-1.5-1.5L9 12l-1.5 1.5M18.25 12H15m1.5-1.5L15 12l1.5 1.5");
}

.kfvqvo_1f {
  d: path("M2.5 12C5 7.5 8.5 5.5 12 5.5s7 2 9.5 6.5c-2.5 4.5-6 6.5-9.5 6.5s-7-2-9.5-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zq8-gg7ek {
  fill: currentColor;
  d: path("M10.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="kfvqvo_1f"/><path class="zq8-gg7ek"/><path class="eyf36hb2s"/></g>`,
		"fallback": "uix-sharp:pupil-response",
	});
}

export default Component;
