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
		"content": `<style>.bc75bcbgc {
  d: path("m6 10.5l3-3l3 3m0 0v8M9.5 16l2.5 2.5l2.5-2.5");
}

.o_srjzbdh {
  d: path("M6 2.5h12v8H6Zm-2.5 11V20A1.5 1.5 0 0 0 5 21.5h14a1.5 1.5 0 0 0 1.5-1.5v-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o_srjzbdh"/><path class="bc75bcbgc"/></g>`,
		"fallback": "uix-sharp:photo-backup",
	});
}

export default Component;
