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

.of_xaerti {
  d: path("M8 15.5V5l7.5-2v10M3 15.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.rybuyacrt {
  d: path("M10.5 13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m6.823 8.75h2.354a1.5 1.5 0 0 0 1.367-2.117l-1.177-2.606a1.5 1.5 0 0 0-2.734 0l-1.177 2.606a1.5 1.5 0 0 0 1.367 2.117");
}
</style><g class="hntgybcog"><path class="of_xaerti"/><path class="rybuyacrt"/></g>`,
		"fallback": "uix:party-music",
	});
}

export default Component;
