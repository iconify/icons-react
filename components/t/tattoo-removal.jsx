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
		"content": `<style>.bugs33b0j {
  d: path("m15.75 8.25l3.5-3.5M13.5 6L17 2.5m1 8L21.5 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yvem4vb7c {
  fill: currentColor;
  d: path("M3.5 11H13v9.5H3.5Z");
}
</style><g class="ulnmmdpxh"><path class="yvem4vb7c"/><path class="bugs33b0j"/></g>`,
		"fallback": "uix-sharp:tattoo-removal",
	});
}

export default Component;
