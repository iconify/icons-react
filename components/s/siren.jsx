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
		"content": `<style>.i09avnb_o {
  d: path("M9.5 13a2.5 2.5 0 0 1 2.5-2.5m0-8v2M3.5 6L5 7.5M20.5 6L19 7.5");
}

.n-o48ubkn {
  d: path("M6.5 17.5V13a5.5 5.5 0 0 1 11 0v4.5M4 17.5h16V21H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n-o48ubkn"/><path class="i09avnb_o"/></g>`,
		"fallback": "uix-sharp:siren",
	});
}

export default Component;
