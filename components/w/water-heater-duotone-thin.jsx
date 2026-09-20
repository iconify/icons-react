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

.e693yj62u {
  fill: currentColor;
  d: path("M7 8a5 5 0 0 1 10 0v9a5 5 0 0 1 -10 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k8sxdsbpq {
  d: path("M7 8a5 5 0 0 1 10 0v9a5 5 0 0 1 -10 0Z");
}

.tfwtwzi0z {
  d: path("M3 5h5");
}

.uu00fhalg {
  d: path("M16 20h5");
}
</style><g class="hntgybcog"><path class="e693yj62u"/><path class="k8sxdsbpq"/><path class="cfd43lbgp"/><path class="tfwtwzi0z"/><path class="uu00fhalg"/></g>`,
		"fallback": "iconmind:water-heater-duotone-thin",
	});
}

export default Component;
