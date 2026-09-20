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
		"content": `<style>.byl482lkm {
  d: path("M9.5 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}

.dk_t55hzw {
  fill: currentColor;
  d: path("M3.5 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fn0p3jboi {
  fill: currentColor;
  d: path("M9.5 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
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

.ype-dsbdp {
  d: path("M3.5 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}
</style><g class="hntgybcog"><path class="dk_t55hzw"/><path class="fn0p3jboi"/><path class="ype-dsbdp"/><path class="byl482lkm"/></g>`,
		"fallback": "iconmind:integration-duotone-thin",
	});
}

export default Component;
