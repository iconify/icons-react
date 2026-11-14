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
		"content": `<style>.f977m53hk {
  d: path("M18 4.25L21 5l-1.25 2.75");
}

.o9o98objf {
  d: path("M4.5 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 3V15M3 20v-3a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3Zm12-2c0-7 2-11 6-13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o9o98objf"/><path class="f977m53hk"/></g>`,
		"fallback": "uix-sharp:smooth-locomotion",
	});
}

export default Component;
