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
		"content": `<style>.kv2lxlbtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.857 3.5h10.286a1.75 1.75 0 0 1 1.317 2.902l-3.937 4.5a1.75 1.75 0 0 1-1.317.598h-2.412a1.75 1.75 0 0 1-1.317-.598l-3.937-4.5A1.75 1.75 0 0 1 6.857 3.5M9 15l6 6m0-6l-6 6");
}
</style><path class="kv2lxlbtv"/>`,
		"fallback": "uix:lead-lost",
	});
}

export default Component;
