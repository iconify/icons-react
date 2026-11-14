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
		"content": `<style>.ncwu50gmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h17V21h-17Zm4.5-2v4m8-4v4M3.5 9.25h17M8.5 12v6.25M6.25 14h4.5m2.75-.5h4m-4 3.5h3");
}
</style><path class="ncwu50gmj"/>`,
		"fallback": "uix-sharp:liturgical-calendar",
	});
}

export default Component;
