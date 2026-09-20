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
		"content": `<style>.eisa2cb9u {
  d: path("M2 22h20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m8ek3-bfo {
  d: path("m12 3 2 2v4l5.5 5.5H14V17l2 2H8l2 -2v-2.5H4.5L10 9V5Z");
}

.o3k-rmbxb {
  d: path("M2 2h3v3");
}

.r_wvrg-qd {
  d: path("m2 5 3 -3");
}
</style><g class="hntgybcog"><path class="m8ek3-bfo"/><path class="eisa2cb9u"/><path class="r_wvrg-qd"/><path class="o3k-rmbxb"/></g>`,
		"fallback": "iconmind:takeoff-outline-thin",
	});
}

export default Component;
