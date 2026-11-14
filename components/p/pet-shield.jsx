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

.udi_2ebke {
  d: path("M12 18.75c-1.5 0-2.5-.75-2.5-1.75s1.25-1.5 2.5-1.5s2.5.5 2.5 1.5s-1 1.75-2.5 1.75M8.75 14h.01m1.99-1.5h.01m2.49 0h.01m1.99 1.5h.01");
}
</style><g class="hntgybcog"><path class="hnvnn0bgl"/><path class="udi_2ebke"/></g>`,
		"fallback": "uix:pet-shield",
	});
}

export default Component;
