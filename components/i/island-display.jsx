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
		"content": `<style>.otep_bcuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3h10.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 5.25A2.25 2.25 0 0 1 4.75 3M4 7.5l1.5 7h9l1.5-7m-8.5 7V18m5-3.5V18m3.55-.71l1.25-1.5a1.5 1.5 0 0 1 1.153-.54H20.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-2.047a1.5 1.5 0 0 1-1.153-.54l-1.25-1.5a1.5 1.5 0 0 1 0-1.92m2.95.96h.01");
}
</style><path class="otep_bcuy"/>`,
		"fallback": "uix:island-display",
	});
}

export default Component;
