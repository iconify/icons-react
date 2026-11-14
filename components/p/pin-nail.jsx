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
		"content": `<style>.o7ksnfb2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5za2 2 0 0 1 2 2v4a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m-2 8h4V12c3.5.5 5 2.5 5 5v2a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19v-2c0-2.5 1.5-4.5 5-5ZM8 16v2.25");
}
</style><path class="o7ksnfb2c"/>`,
		"fallback": "uix:pin-nail",
	});
}

export default Component;
