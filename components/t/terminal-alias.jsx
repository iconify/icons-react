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
		"content": `<style>.ajoubmbfc {
  d: path("m7.5 7.5l2.25 2.25L7.5 12m5 0h3m-.5 9l5.25-5.25m-4-.25h4.25v4.25");
}

.rp05g54zr {
  d: path("M13.4 15.5H4.5v-11h15v8.1m-17 5.9h11.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rp05g54zr"/><path class="ajoubmbfc"/></g>`,
		"fallback": "uix-sharp:terminal-alias",
	});
}

export default Component;
