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

.odojpdwze {
  d: path("M3.25 12a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 1 0-17.5 0");
}

.pivchhb4r {
  d: path("M3.25 12C6.5 9.5 8.5 9.5 12 12s5.5 2.5 8.75 0");
}
</style><g class="hntgybcog"><path class="odojpdwze"/><path class="pivchhb4r"/></g>`,
		"fallback": "uix:neptune-planet",
	});
}

export default Component;
