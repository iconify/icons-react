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
		"content": `<style>.b47sfx-9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 13.5l9-9m-5 0h5v5m6 1l-9 9m5 0h-5v-5");
}
</style><path class="b47sfx-9e"/>`,
		"fallback": "uix-sharp:swap-diagonal",
	});
}

export default Component;
