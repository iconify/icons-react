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
		"content": `<style>.kewwskp-c {
  d: path("M5.75 7.25L3 10l2.75 2.75M15 2.5h6V15h-6Zm3 3h.01M18 8.75h.01M18 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vp9egfbng {
  d: path("M11 21.5v-8A3.5 3.5 0 0 0 7.5 10H3");
}
</style><g class="ulnmmdpxh"><path class="vp9egfbng"/><path class="kewwskp-c"/></g>`,
		"fallback": "uix-sharp:turn-left-at-lights",
	});
}

export default Component;
