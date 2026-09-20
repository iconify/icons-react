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
		"content": `<style>.adc-0_biz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5.5 13.5 10 18h4l4.5 -4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.b7emas-0s {
  d: path("M5.5 10.5 10 6h4l4.5 4.5");
}

.cym716qxd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5.5 10.5 10 6h4l4.5 4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fcstqn4mf {
  d: path("M18 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ph8xawbhr {
  fill: currentColor;
  d: path("M18 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qgv_f1esc {
  d: path("M5.5 13.5 10 18h4l4.5 -4.5");
}

.rsea1pbos {
  fill: currentColor;
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zuquf0b8s {
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="rsea1pbos"/><path class="ph8xawbhr"/><path class="cym716qxd"/><path class="adc-0_biz"/><path class="zuquf0b8s"/><path class="fcstqn4mf"/><path class="b7emas-0s"/><path class="qgv_f1esc"/></g>`,
		"fallback": "iconmind:scatter-gather-duotone-bold",
	});
}

export default Component;
