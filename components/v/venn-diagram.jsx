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
		"content": `<style>.jfjce3bxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m7 0a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M6.5 8.75a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><path class="jfjce3bxw"/>`,
		"fallback": "iconoven:venn-diagram",
	});
}

export default Component;
