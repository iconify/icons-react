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
		"content": `<style>.egy3k7b8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v6H4.75zm-2 9.25h18.5m-16.5 3.25h14.5v6H4.75z");
}
</style><path class="egy3k7b8v"/>`,
		"fallback": "iconoven:separator-line-sharp",
	});
}

export default Component;
