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
		"content": `<style>.cfd43lbgp {
  d: path("M7 13h10");
}

.k8sxdsbpq {
  d: path("M7 8a5 5 0 0 1 10 0v9a5 5 0 0 1 -10 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tfwtwzi0z {
  d: path("M3 5h5");
}

.uu00fhalg {
  d: path("M16 20h5");
}
</style><g class="nrj6p8qat"><path class="k8sxdsbpq"/><path class="cfd43lbgp"/><path class="tfwtwzi0z"/><path class="uu00fhalg"/></g>`,
		"fallback": "iconmind:water-heater-outline-regular",
	});
}

export default Component;
