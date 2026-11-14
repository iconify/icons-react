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
		"content": `<style>.t4towkb3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c-5.25 0-9.5 4-9.5 9s4 9 9 9c1.5 0 2.25-1 1.75-2.25S13.5 16 15 16h2.5c2.25 0 4-1.75 4-4c0-5-4.25-9-9.5-9m-4.75 9h.01m1.49-4.25h.01m4.74-1h.01m3.74 3h.01");
}
</style><path class="t4towkb3b"/>`,
		"fallback": "uix:paint-palette",
	});
}

export default Component;
