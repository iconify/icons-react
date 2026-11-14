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

.pc2z84bac {
  d: path("M12 15.5S8 13 8 10.25c0-1.35 1-2.5 2.25-2.5c.75 0 1.35.35 1.75 1c.4-.65 1-1 1.75-1C15 7.75 16 8.9 16 10.25c0 2.75-4 5.25-4 5.25");
}
</style><g class="hntgybcog"><path class="hnvnn0bgl"/><path class="pc2z84bac"/></g>`,
		"fallback": "uix:shield-heart",
	});
}

export default Component;
