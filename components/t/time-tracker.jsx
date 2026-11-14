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
		"content": `<style>.tmhzjjbbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0Zm5.75-11h4.5M12 2.5v3m0 8l3-3");
}
</style><path class="tmhzjjbbs"/>`,
		"fallback": "uix-sharp:time-tracker",
	});
}

export default Component;
