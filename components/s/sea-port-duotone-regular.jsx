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
		"content": `<style>.axz8bmb1c {
  d: path("M17 4v6");
}

.brrdcmt-d {
  fill: currentColor;
  d: path("M14 10h6v4h-6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h69dzcbeh {
  d: path("M14 10h6v4h-6Z");
}

.k85h_vh6j {
  d: path("m5 9 5 -5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rdjfllbip {
  d: path("M5 4h14");
}

.yo2xhpbcn {
  d: path("M5 4v15");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="brrdcmt-d"/><path class="yo2xhpbcn"/><path class="rdjfllbip"/><path class="k85h_vh6j"/><path class="axz8bmb1c"/><path class="h69dzcbeh"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:sea-port-duotone-regular",
	});
}

export default Component;
