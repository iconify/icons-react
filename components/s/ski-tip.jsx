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
		"content": `<style>.x1rkzxeas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13H12c3 0 5-2 6-5.5l3.5 1C20.25 14 16.75 17 12 17H2.5Z");
}
</style><path class="x1rkzxeas"/>`,
		"fallback": "uix:ski-tip",
	});
}

export default Component;
