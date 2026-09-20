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
		"content": `<style>.b7emas-0s {
  d: path("M5.5 10.5 10 6h4l4.5 4.5");
}

.fcstqn4mf {
  d: path("M18 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qgv_f1esc {
  d: path("M5.5 13.5 10 18h4l4.5 -4.5");
}

.zuquf0b8s {
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="zuquf0b8s"/><path class="fcstqn4mf"/><path class="b7emas-0s"/><path class="qgv_f1esc"/></g>`,
		"fallback": "iconmind:scatter-gather-outline-regular",
	});
}

export default Component;
