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
		"content": `<style>.xf70j2i9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5c0-3.25 2.25-5.25 4.75-5.25s4.5 2 4.5 5.25ZM15 11h6.5v9.5H15ZM4.25 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM15 14.25h6.5M15 17.5h6.5");
}
</style><path class="xf70j2i9a"/>`,
		"fallback": "uix-sharp:investor",
	});
}

export default Component;
