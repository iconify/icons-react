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
		"content": `<style>.hz8ltubnh {
  fill: currentColor;
  d: path("M7.5 14a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.tmjapqjpk {
  d: path("M3.5 14a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm11.25-4.75L20.5 3.5m-5 0h5v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tmjapqjpk"/><path class="hz8ltubnh"/></g>`,
		"fallback": "uix-sharp:prostate",
	});
}

export default Component;
