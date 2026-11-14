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
		"content": `<style>.oeucrxbku {
  d: path("M3.5 2.5h17v19h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-jm77swm {
  d: path("M8 10a4 4 0 0 1 8 0m-4 0l2.25-2.25M8.5 14.5h.01m3.49 0h.01m3.49 0h.01M8.5 18h.01M12 18h.01m3.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="oeucrxbku"/><path class="v-jm77swm"/></g>`,
		"fallback": "uix-sharp:meter-keypad",
	});
}

export default Component;
