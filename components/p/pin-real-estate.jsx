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
		"content": `<style>.hdyt2_rwv {
  d: path("M16 7V4h2v4.75m-3.5 11a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wac1eqbma {
  d: path("M11.76 20.5H4v-10l8-7l8 7v1.54");
}
</style><g class="ulnmmdpxh"><path class="wac1eqbma"/><path class="hdyt2_rwv"/></g>`,
		"fallback": "uix-sharp:pin-real-estate",
	});
}

export default Component;
