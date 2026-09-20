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
		"content": `<style>.c-xj8zban {
  d: path("M20 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lvtw3tv7j {
  d: path("m16 21 5 -5");
}

.q6rh9u55e {
  d: path("M3 18 15 6");
}

.v_a3lnirg {
  d: path("M6 21 18 9");
}
</style><g class="hntgybcog"><path class="q6rh9u55e"/><path class="v_a3lnirg"/><path class="lvtw3tv7j"/><path class="c-xj8zban"/></g>`,
		"fallback": "iconmind:ski-run-outline-thin",
	});
}

export default Component;
