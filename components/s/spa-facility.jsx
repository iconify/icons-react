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
		"content": `<style>.s2ah9rhbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5c2.75 3.25 3.25 7.5 0 13c-3.25-5.5-2.75-9.75 0-13m0 13c-4.5 0-8.5-2.5-9.5-7c3 0 5.25 1 6.75 2.5M12 16.5c4.5 0 8.5-2.5 9.5-7c-3 0-5.25 1-6.75 2.5M5 20h14");
}
</style><path class="s2ah9rhbw"/>`,
		"fallback": "uix:spa-facility",
	});
}

export default Component;
