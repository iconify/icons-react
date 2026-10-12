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
		"content": `<style>.rk6d5lxix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 21.25V3.75m4 17.5V3.75M4.25 8h4m-4 4.25h4m-4 4.25h4m0-9.75h3.55l1.2 2L18 18l.955 1.75h2.295");
}
</style><path class="rk6d5lxix"/>`,
		"fallback": "iconoven:playground-slide-sharp",
	});
}

export default Component;
