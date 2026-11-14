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
		"content": `<style>.h-98b_owd {
  d: path("M6.5 15.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wu2bw56kj {
  d: path("M6.5 3h3.75L12 6.5L13.75 3h3.75l-3.25 7h-4.5Z");
}
</style><g class="ulnmmdpxh"><path class="wu2bw56kj"/><path class="h-98b_owd"/></g>`,
		"fallback": "uix-sharp:medal",
	});
}

export default Component;
