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
		"content": `<style>.d3ds8qbyb {
  d: path("M8.25 11.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0V6.5m0 0q3 .5 3 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ns0c7bbfw {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8");
}
</style><g class="hntgybcog"><path class="ns0c7bbfw"/><path class="d3ds8qbyb"/></g>`,
		"fallback": "uix:lesson-video-music",
	});
}

export default Component;
