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
		"content": `<style>.kekmpcivn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h12.75A2.625 2.625 0 0 1 21 5.625v6.75A2.625 2.625 0 0 1 18.375 15H5.625A2.625 2.625 0 0 1 3 12.375v-6.75A2.625 2.625 0 0 1 5.625 3M12 15l-5 6.5m5-6.5l5 6.5M12 15v6.5M8 12V9.5m4 2.5V6m4 6V8");
}
</style><path class="kekmpcivn"/>`,
		"fallback": "uix:presentation-screen",
	});
}

export default Component;
