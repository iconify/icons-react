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
		"content": `<style>.mc-jdgbdv {
  d: path("M10 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h3.5M9.25 15l2 2l3.5-4");
}

.trh2ghbkw {
  d: path("M6.5 2.5h11v19h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="trh2ghbkw"/><path class="mc-jdgbdv"/></g>`,
		"fallback": "uix-sharp:leave-approved",
	});
}

export default Component;
