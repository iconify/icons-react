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
		"content": `<style>.dpf74prvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9h15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 13.5v-3A1.5 1.5 0 0 1 4.5 9M12 9v6M5.5 6c0-4.5 13-4.5 13 0m-13 12c0 4.5 13 4.5 13 0");
}
</style><path class="dpf74prvx"/>`,
		"fallback": "uix:magnet-bar-field",
	});
}

export default Component;
