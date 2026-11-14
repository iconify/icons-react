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
		"content": `<style>.b72b2enxz {
  d: path("M7 6.5V3h13v14.5h-4.5M7 11h5m-5 3.5h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nkjgfbcnd {
  d: path("M3.5 6.5h12V21l-2-1.25l-2 1.25l-2-1.25l-2 1.25l-2-1.25l-2 1.25Z");
}
</style><g class="hntgybcog"><path class="nkjgfbcnd"/><path class="b72b2enxz"/></g>`,
		"fallback": "uix:invoice-duplicate",
	});
}

export default Component;
