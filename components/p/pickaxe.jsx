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
		"content": `<style>.cv857cxrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.82 3.55q14.7-.32 14.38 14.38a1.6 1.6 0 0 1-3.2-.11q.53-11.6-11.07-11.07a1.6 1.6 0 0 1-.11-3.2m8.68 5.7L3.25 20.5");
}
</style><path class="cv857cxrx"/>`,
		"fallback": "iconoven:pickaxe",
	});
}

export default Component;
