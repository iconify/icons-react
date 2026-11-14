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
		"content": `<style>.oabyso0_c {
  d: path("M14.3 21.5H3.5v-16h13v10.3M8 5.5v-3h4v3");
}

.s168ywbkz {
  d: path("M7.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM7 17h4.5m3.25 1l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oabyso0_c"/><path class="s168ywbkz"/></g>`,
		"fallback": "uix-sharp:press-badge-check",
	});
}

export default Component;
