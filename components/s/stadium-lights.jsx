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
		"content": `<style>.yififpbki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v6h-15Zm7.5 6v13m-4 0h8m-7.5-16h.01m3.49 0h.01m3.49 0h.01");
}
</style><path class="yififpbki"/>`,
		"fallback": "uix-sharp:stadium-lights",
	});
}

export default Component;
