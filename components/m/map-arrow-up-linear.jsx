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
		"content": `<style>.cb2rjqbqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5275 2.99281L3.16496 19.5025C2.49789 20.9984 3.97914 22.5499 5.36689 21.809L11.2706 18.657C11.7298 18.4118 12.2702 18.4118 12.7294 18.657L18.6331 21.809C20.0209 22.5499 21.5021 20.9984 20.835 19.5025L13.4725 2.99281C12.8822 1.66906 11.1178 1.66906 10.5275 2.99281Z");
}
</style><path class="cb2rjqbqz"/>`,
		"fallback": "solar:map-arrow-up-linear",
	});
}

export default Component;
