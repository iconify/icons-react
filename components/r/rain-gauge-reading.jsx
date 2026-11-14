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
		"content": `<style>.jrtm541ns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14l-2 3v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-14ZM7 15h10M7 9h3.5M7 12h3.5");
}
</style><path class="jrtm541ns"/>`,
		"fallback": "uix:rain-gauge-reading",
	});
}

export default Component;
