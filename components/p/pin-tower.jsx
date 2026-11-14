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
		"content": `<style>.dr7wq0bqh {
  d: path("M7 21.5v-13l5-6l5 6v13m-12.5 0h15");
}

.ueejwcmum {
  d: path("M10.5 21.5V18a1.5 1.5 0 0 1 3 0v3.5m-1.5-10v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dr7wq0bqh"/><path class="ueejwcmum"/></g>`,
		"fallback": "uix-sharp:pin-tower",
	});
}

export default Component;
