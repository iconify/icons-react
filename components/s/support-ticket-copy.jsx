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
		"content": `<style>.nun08ob7f {
  d: path("M2.5 8.5h16V12a2 2 0 0 0 0 4v3.5h-16V16a2 2 0 0 0 0-4Z");
}

.olgu7ac6n {
  d: path("M5.5 8.5v-3h16V9a2 2 0 0 0 0 4v3.5h-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nun08ob7f"/><path class="olgu7ac6n"/></g>`,
		"fallback": "uix-sharp:support-ticket-copy",
	});
}

export default Component;
