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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}

.vqulmnhnj {
  d: path("M12 16s-3.5-2.25-3.5-4.5c0-1 .75-2 2-2c.75 0 1.25.5 1.5 1c.25-.5.75-1 1.5-1c1.25 0 2 1 2 2c0 2.25-3.5 4.5-3.5 4.5");
}
</style><g class="hntgybcog"><path class="hnvnn0bgl"/><path class="vqulmnhnj"/></g>`,
		"fallback": "uix:life-heart-shield",
	});
}

export default Component;
