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
		"content": `<style>.ghtz8h6wm {
  d: path("M12 5.5a7.5 7.5 0 1 1-6.495 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q-jmhsuio {
  d: path("m15 2.5l-3 3l3 3m-2.315 3.214l.065.036a1.43 1.43 0 0 1 0 2.5l-.065.036A1.47 1.47 0 0 1 10.5 13a1.47 1.47 0 0 1 2.185-1.286");
}
</style><g class="hntgybcog"><path class="ghtz8h6wm"/><path class="q-jmhsuio"/></g>`,
		"fallback": "uix:replay",
	});
}

export default Component;
