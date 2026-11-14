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
		"content": `<style>.h08zulttp {
  d: path("M6.125 7h11.75A2.625 2.625 0 0 1 20.5 9.625v4.75A2.625 2.625 0 0 1 17.875 17H6.125A2.625 2.625 0 0 1 3.5 14.375v-4.75A2.625 2.625 0 0 1 6.125 7M7 12h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kmnkxpx7j {
  d: path("M6 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m10 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="h08zulttp"/><path class="kmnkxpx7j"/></g>`,
		"fallback": "uix:razor-blade",
	});
}

export default Component;
