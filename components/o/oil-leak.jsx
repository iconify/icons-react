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
		"content": `<style>.d12vl38pv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9h9.5v8a1.5 1.5 0 0 1-1.5 1.5h-6.5A1.5 1.5 0 0 1 9 17Zm9.5 1.5H20a1.5 1.5 0 0 1 1.5 1.5v2.5A1.5 1.5 0 0 1 20 16h-1.5M12 9V6.5h3.5V9M9 11L3.5 6m.25 4S2 12.75 2 14a1.75 1.75 0 0 0 3.5 0c0-1.25-1.75-4-1.75-4");
}
</style><path class="d12vl38pv"/>`,
		"fallback": "uix:oil-leak",
	});
}

export default Component;
