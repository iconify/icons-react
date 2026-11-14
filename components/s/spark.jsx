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
		"content": `<style>.hef25kh4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14 2.5l-5 8l6 2.5l-5 8.5m-1-11l-4.5 2M15 13l4.5-2");
}
</style><path class="hef25kh4f"/>`,
		"fallback": "uix:spark",
	});
}

export default Component;
