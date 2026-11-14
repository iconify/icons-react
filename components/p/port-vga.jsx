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
		"content": `<style>.vkipt-5rn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.099 7.5h7.802a2.625 2.625 0 0 1 2.59 3.057l-.625 3.75a2.625 2.625 0 0 1-2.59 2.193H8.724a2.625 2.625 0 0 1-2.59-2.193l-.625-3.75A2.625 2.625 0 0 1 8.099 7.5M2.75 12h.01m18.49 0h.01M9 10.5h.01m2.99 0h.01m2.99 0h.01m-4.51 3h.01m2.99 0h.01");
}
</style><path class="vkipt-5rn"/>`,
		"fallback": "uix:port-vga",
	});
}

export default Component;
