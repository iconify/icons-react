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
		"content": `<style>.o9daq7b6k {
  d: path("m12 16l-5.25-5.25A3.5 3.5 0 0 1 12 6.5a3.5 3.5 0 0 1 5.25 4.25Z");
}

.rkn6z-b1f {
  d: path("M20.227 14.25a9.5 9.5 0 0 1-16.454 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o9daq7b6k"/><path class="rkn6z-b1f"/></g>`,
		"fallback": "uix-sharp:victim-support",
	});
}

export default Component;
