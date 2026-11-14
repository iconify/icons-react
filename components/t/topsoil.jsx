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
		"content": `<style>.p_nlq29ec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10Q7 8 12 10t9.5 0m-19 10.5h19M7.5 15h.01m8.99.5h.01M12 10V4.5m0 3c0-2.5 2-4 4.5-4c0 2.5-2 4-4.5 4Z");
}
</style><path class="p_nlq29ec"/>`,
		"fallback": "uix-sharp:topsoil",
	});
}

export default Component;
