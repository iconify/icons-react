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
		"content": `<style>.h1bso17im {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v3.5A3.5 3.5 0 0 1 18 14H6a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 6 3.5M12 14v7.5m-9.5-10l19-5.5");
}
</style><path class="h1bso17im"/>`,
		"fallback": "uix:road-closed-sign",
	});
}

export default Component;
