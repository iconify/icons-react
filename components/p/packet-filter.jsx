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
		"content": `<style>.bsea988vl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h17l-6.5 8V19l-4 2v-8.5ZM9 8.25h.01M12 8h.01m2.99.25h.01");
}
</style><path class="bsea988vl"/>`,
		"fallback": "uix:packet-filter",
	});
}

export default Component;
