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
		"content": `<style>.y_fnkk6yj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16V7H4Zm-1 7h18V14H3ZM6.5 7v3.5m0 3.5v5m11-12v3.5m0 3.5v5m-15 0h19");
}
</style><path class="y_fnkk6yj"/>`,
		"fallback": "uix-sharp:platform-bench",
	});
}

export default Component;
