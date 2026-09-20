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
		"content": `<style>.cp6jnb7jw {
  d: path("M17 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iu1vklb-k {
  d: path("M9 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nqnw98byf {
  d: path("M2 14h20");
}

.t-euypbap {
  d: path("M3 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="t-euypbap"/><path class="iu1vklb-k"/><path class="cp6jnb7jw"/><path class="nqnw98byf"/></g>`,
		"fallback": "iconmind:packet-loss-outline-thin",
	});
}

export default Component;
