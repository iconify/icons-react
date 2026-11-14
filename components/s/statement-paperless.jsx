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
		"content": `<style>.b37bn9b6s {
  d: path("M11.3 21.5H4.5v-19h15v9.6M8 7h8m-8 3.5h8M8 14h3.5");
}

.ohj1hkepv {
  d: path("M15 21.25c0-4.25 2-6.25 6.25-6.5c0 4.25-2.25 6.5-6.25 6.5Zm0 0L18.25 18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b37bn9b6s"/><path class="ohj1hkepv"/></g>`,
		"fallback": "uix-sharp:statement-paperless",
	});
}

export default Component;
