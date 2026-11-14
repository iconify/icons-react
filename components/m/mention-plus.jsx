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
		"content": `<style>.bb0on98hj {
  d: path("M7.25 9.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.r7-gbuhzd {
  d: path("M12.25 7.25V11a2.125 2.125 0 0 0 4.25 0V9.75a6.75 6.75 0 1 0-2 4.75m3.5.5v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bb0on98hj"/><path class="r7-gbuhzd"/></g>`,
		"fallback": "uix-sharp:mention-plus",
	});
}

export default Component;
