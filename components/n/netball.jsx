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
		"content": `<style>.fl2uyx8pb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M3.5 12.5a6.5 1.5 0 1 0 13 0a6.5 1.5 0 1 0-13 0m16-10v19m-3-9h3M5 13.5l2.5 7m7.5-7l-2.5 7");
}
</style><path class="fl2uyx8pb"/>`,
		"fallback": "uix:netball",
	});
}

export default Component;
