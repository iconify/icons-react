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
		"content": `<style>.beb_ark2z {
  d: path("m9.5 8.5l6 3.5l-6 3.5Z");
}

.mqxziib8l {
  d: path("M4.5 5.5h15A1.5 1.5 0 0 1 21 7v3a2 2 0 0 0 0 4v3a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17v-3a2 2 0 0 0 0-4V7a1.5 1.5 0 0 1 1.5-1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mqxziib8l"/><path class="beb_ark2z"/></g>`,
		"fallback": "uix-sharp:now-showing",
	});
}

export default Component;
