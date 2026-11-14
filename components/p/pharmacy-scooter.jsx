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
		"content": `<style>.dv6hivk1p {
  d: path("M3.5 17h14.75m.25 2l-2-16m-2 0h4M4 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm12.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ie41-iwkv {
  d: path("M3.5 9.5H11V17H3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dv6hivk1p"/><path class="ie41-iwkv"/></g>`,
		"fallback": "uix-sharp:pharmacy-scooter",
	});
}

export default Component;
