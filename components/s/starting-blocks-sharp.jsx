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
		"content": `<style>.s1j_7sbqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.9 13.05l-1.2-.9l-.6-.45l-.45.6l-2.7 3.6l-.45.6l.6.45l1.2.9l.6.45l.45-.6l2.7-3.6l.45-.6zm9.5-3.5l-1.2-.9l-.6-.45l-.45.6l-2.7 3.6l-.45.6l.6.45l1.2.9l.6.45l.45-.6l2.7-3.6l.45-.6zM9 15.5v5.75M18.5 12v9.25m-15.75 0h18.5");
}
</style><path class="s1j_7sbqa"/>`,
		"fallback": "iconoven:starting-blocks-sharp",
	});
}

export default Component;
