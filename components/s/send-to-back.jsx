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
		"content": `<style>.hduto9bou {
  d: path("M6 5.5h1.5A3.5 3.5 0 0 1 11 9v1.5A3.5 3.5 0 0 1 7.5 14H6a3.5 3.5 0 0 1-3.5-3.5V9A3.5 3.5 0 0 1 6 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p85i7rbet {
  d: path("M11 10h2a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2V14m13-8.5v13m-1.75-1.75l1.75 1.75l1.75-1.75");
}
</style><g class="hntgybcog"><path class="hduto9bou"/><path class="p85i7rbet"/></g>`,
		"fallback": "uix:send-to-back",
	});
}

export default Component;
