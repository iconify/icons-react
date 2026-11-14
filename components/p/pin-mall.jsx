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
		"content": `<style>.k0i0ytbox {
  d: path("M9 11V6a3 3 0 0 1 6 0v5");
}

.st_pmyb4h {
  d: path("M4.5 7.5h15v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="st_pmyb4h"/><path class="k0i0ytbox"/></g>`,
		"fallback": "uix-sharp:pin-mall",
	});
}

export default Component;
