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
		"content": `<style>.apvwnjbfe {
  d: path("M8.5 5L12 7l3.5-2M12 7V3.5");
}

.b1a2m1bfw {
  d: path("M12 7c-5-1.5-8.5 1.5-8 6s4 7.5 8 7.5s7.5-3 8-7.5s-3-7.5-8-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b1a2m1bfw"/><path class="apvwnjbfe"/></g>`,
		"fallback": "uix:tomato",
	});
}

export default Component;
