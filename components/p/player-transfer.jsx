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
		"content": `<style>.o-2batzed {
  d: path("M15.25 5.5L18 6l.5-2.75");
}

.two5wtbpv {
  d: path("M3.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm12 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM2.5 21a3.5 3.5 0 0 1 7 0m5 0a3.5 3.5 0 0 1 7 0M6 6a7.5 7.5 0 0 1 12 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="two5wtbpv"/><path class="o-2batzed"/></g>`,
		"fallback": "uix-sharp:player-transfer",
	});
}

export default Component;
