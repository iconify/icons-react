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
		"content": `<style>.xz-kjebqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 3.5l6.5 7l-6.5 7m7-14l6.5 7l-6.5 7m9-5V17m0 3.5h.01");
}
</style><path class="xz-kjebqu"/>`,
		"fallback": "uix:sprint-at-risk",
	});
}

export default Component;
