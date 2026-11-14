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
		"content": `<style>.xe4mldb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4Zm16 0h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6Z");
}
</style><path class="xe4mldb7s"/>`,
		"fallback": "uix:study-leave",
	});
}

export default Component;
