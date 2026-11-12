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
		"content": `<style>.dgb8ehbiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.99281 13.4725L19.5025 20.835C20.9984 21.5021 22.5499 20.0209 21.809 18.6331L18.657 12.7294C18.4118 12.2702 18.4118 11.7298 18.657 11.2706L21.809 5.36689C22.5499 3.97914 20.9984 2.49789 19.5025 3.16496L2.99281 10.5275C1.66906 11.1178 1.66906 12.8822 2.99281 13.4725Z");
}
</style><path class="dgb8ehbiv"/>`,
		"fallback": "solar:map-arrow-left-linear",
	});
}

export default Component;
