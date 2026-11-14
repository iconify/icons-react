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
		"content": `<style>.jnp_mjbdv {
  d: path("M9.25 16a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.sq1cuab5e {
  d: path("M3 21V10l9-6.5l9 6.5v11Zm0-11h18m-9-6.5V10m-5.5 0v11m11-11v11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sq1cuab5e"/><path class="jnp_mjbdv"/></g>`,
		"fallback": "uix-sharp:orangery",
	});
}

export default Component;
