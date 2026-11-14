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
		"content": `<style>.e-mngnsdr {
  d: path("M3.5 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 5.75V21.5m0-8.5L17 17.5m-3.5-8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ku5bixbjb {
  d: path("M13.75 8.5q3.25 2.5 6.5 0");
}
</style><g class="hntgybcog"><path class="e-mngnsdr"/><path class="ku5bixbjb"/></g>`,
		"fallback": "uix:volleyball-dig",
	});
}

export default Component;
