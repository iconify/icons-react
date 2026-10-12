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
		"content": `<style>.ofq06uyxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4V16c0 1.5.75 3 2 4H8c1.25-1 2-2.5 2-4V6.5H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1");
}
</style><path class="ofq06uyxm"/>`,
		"fallback": "iconoven:rivet",
	});
}

export default Component;
