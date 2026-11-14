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
		"content": `<style>.cel8kx0ms {
  d: path("M12 6.75c-1-1 1-2.25 0-3.5m5.5 13.25c.75 1.25 2.25.25 3 1.75m-14-1.75c-.75 1.25-2.25.25-3 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sfb5jdben {
  d: path("M5.5 13.25a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="sfb5jdben"/><path class="cel8kx0ms"/></g>`,
		"fallback": "uix:microbe",
	});
}

export default Component;
