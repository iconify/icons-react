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
		"content": `<style>.e5wekzbcs {
  fill: currentColor;
  d: path("M8 12za1.5 1.5 0 0 1 1.5 1.5V19A1.5 1.5 0 0 1 8 20.5A1.5 1.5 0 0 1 6.5 19v-5.5A1.5 1.5 0 0 1 8 12m4.5-8.5zA1.5 1.5 0 0 1 14 5v5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 11 10V5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jg_a1sh_j {
  d: path("M3.5 3v17.5h9.1");
}

.mi1prqbip {
  d: path("M11 18.5v2m5-1.75v-3.5a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1 1.25 0A.75.75 0 0 1 20 18a.75.75 0 0 1 1.25.5v1.25c0 1.25-.75 2-2 2h-1c-.75 0-1.25-.25-1.75-1l-1.75-2a.75.75 0 0 1 1.25 0");
}
</style><g class="hntgybcog"><path class="jg_a1sh_j"/><path class="e5wekzbcs"/><path class="mi1prqbip"/></g>`,
		"fallback": "uix:self-service-bi",
	});
}

export default Component;
