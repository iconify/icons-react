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
		"content": `<style>.iio-4ccvw {
  d: path("M2.5 7h15v11h-15Z");
}

.rs1wtuo8z {
  d: path("M6 7V6a2 2 0 0 1 2-2h11.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-2M8 9.75l5 2.75l-5 2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iio-4ccvw"/><path class="rs1wtuo8z"/></g>`,
		"fallback": "uix-sharp:spatial-video",
	});
}

export default Component;
