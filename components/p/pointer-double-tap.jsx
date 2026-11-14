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
		"content": `<style>.tspvagb_s {
  d: path("M8.5 14.5v-6a1.5 1.5 0 0 1 3 0V13a1.25 1.25 0 0 1 2.5 0a1.25 1.25 0 0 1 2.5 0a1.25 1.25 0 0 1 2.5 0v3.5c0 2.9-1.75 5-4.5 5H13c-1.6 0-2.75-.6-3.5-1.75l-4-5a1.5 1.5 0 0 1 2-2Zm-1.964-8a4 4 0 0 1 6.928 0");
}

.u8egp0but {
  d: path("M4.371 5.25a6.5 6.5 0 0 1 11.258 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tspvagb_s"/><path class="u8egp0but"/></g>`,
		"fallback": "uix-sharp:pointer-double-tap",
	});
}

export default Component;
