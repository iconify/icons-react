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
		"content": `<style>.y4py69bfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3h5v5.5l6 1.5a2.5 2.5 0 0 1 2 2.5v1h-13ZM3 15.5V19a2.5 2.5 0 0 0 2.5 2.5h13A2.5 2.5 0 0 0 21 19v-3.5m-13.5-2v4.75M16 13.5v4.75m-10.25 0h12.5");
}
</style><path class="y4py69bfe"/>`,
		"fallback": "uix-sharp:skate-guard",
	});
}

export default Component;
