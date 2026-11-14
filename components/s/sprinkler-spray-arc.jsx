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

.sgls5rb0c {
  d: path("M12 12.5c2-9 8-9 9.5 2.5M12 12.5c-2-9-8-9-9.5 2.5");
}

.v9-adccac {
  d: path("M12 21.5v-7m-1-2h2a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-6 9h14");
}
</style><g class="hntgybcog"><path class="v9-adccac"/><path class="sgls5rb0c"/></g>`,
		"fallback": "uix:sprinkler-spray-arc",
	});
}

export default Component;
