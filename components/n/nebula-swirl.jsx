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
		"content": `<style>.sl95qpbug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 13a3.5 3.5 0 0 0 7 0a5.25 5.25 0 0 0-10.5 0a7 7 0 0 0 14 0a8.75 8.75 0 0 0-17.5 0m10-1h.01");
}
</style><path class="sl95qpbug"/>`,
		"fallback": "uix:nebula-swirl",
	});
}

export default Component;
