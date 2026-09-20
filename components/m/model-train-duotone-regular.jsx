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
		"content": `<style>.a85y0t8_i {
  fill: currentColor;
  d: path("M14 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f7_9udqlo {
  fill: currentColor;
  d: path("M6 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h-fsjz3dt {
  fill: currentColor;
  d: path("M5 5v9h14V9h-5V5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p30z63bez {
  d: path("M5 5v9h14V9h-5V5Z");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.wtfq6b2ta {
  d: path("M14 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.x4bmljlar {
  d: path("M6 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="h-fsjz3dt"/><path class="f7_9udqlo"/><path class="a85y0t8_i"/><path class="p30z63bez"/><path class="x4bmljlar"/><path class="wtfq6b2ta"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:model-train-duotone-regular",
	});
}

export default Component;
