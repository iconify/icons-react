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

.sax90g9vz {
  d: path("M6 8h12a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17v-5.5A3.5 3.5 0 0 1 6 8m1 0V5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5V8");
}

.xou7niqql {
  d: path("M5.25 14.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m9.25-2.75h4M15 16.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="sax90g9vz"/><path class="xou7niqql"/></g>`,
		"fallback": "uix:radio-portable",
	});
}

export default Component;
