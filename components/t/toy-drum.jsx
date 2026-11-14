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
		"content": `<style>.ivfdabg1j {
  d: path("M4.5 10a7.5 2.5 0 1 0 15 0a7.5 2.5 0 1 0-15 0Z");
}

.kfk2zn8hp {
  d: path("M4.5 10v7a7.5 2.5 0 0 0 15 0v-7M8 7.75l8.5-5.25M16 7.75L7.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ivfdabg1j"/><path class="kfk2zn8hp"/></g>`,
		"fallback": "uix-sharp:toy-drum",
	});
}

export default Component;
