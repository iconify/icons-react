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
		"content": `<style>.at_hver0q {
  d: path("m11.5 5l3 1.75V10l-3 1.75l-3-1.75V6.75Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iqlcnst8c {
  d: path("M6.5 14a5 2.25 0 1 0 10 0a5 2.25 0 1 0-10 0");
}

.jshg1fb2b {
  d: path("m8.5 6.75l3 1.75l3-1.75m-3 1.75v3.25M2.75 14a8.75 5 0 0 0 17.5 0m-1.5 1.5l1.5-1.5l1.5 1.5");
}
</style><g class="hntgybcog"><path class="iqlcnst8c"/><path class="at_hver0q"/><path class="jshg1fb2b"/></g>`,
		"fallback": "uix:turntable-scan",
	});
}

export default Component;
