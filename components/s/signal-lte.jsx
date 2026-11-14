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
		"content": `<style>.envtzjb9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7v10h4M8.5 7H14m-2.75 0v10M20.5 7H16v10h4.5M16 12h3.5");
}
</style><path class="envtzjb9c"/>`,
		"fallback": "uix:signal-lte",
	});
}

export default Component;
