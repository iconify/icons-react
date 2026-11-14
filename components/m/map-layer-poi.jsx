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
		"content": `<style>.foekz_rii {
  d: path("M12 21.5c-3-2.75-7.5-7-7.5-11.5a7.5 7.5 0 0 1 15 0c0 4.5-4.5 8.75-7.5 11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7dtlqbvr {
  d: path("M9.25 10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="foekz_rii"/><path class="z7dtlqbvr"/></g>`,
		"fallback": "uix:map-layer-poi",
	});
}

export default Component;
