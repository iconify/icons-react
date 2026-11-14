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
		"content": `<style>.tp12m3bbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m9 0h4m-13 0h-4M12 7.5v-4m0 13v4M20.5 9v6m-17-6v6M9 3.5h6m-6 17h6");
}
</style><path class="tp12m3bbl"/>`,
		"fallback": "uix:smart-hub",
	});
}

export default Component;
