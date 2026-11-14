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
		"content": `<style>.f97i_e8yw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10v4H7ZM4.5 9.75h15v4h-15Zm-2 6.75h19v4h-19Z");
}
</style><path class="f97i_e8yw"/>`,
		"fallback": "uix-sharp:tech-stack",
	});
}

export default Component;
