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
		"content": `<style>.fdigtqb-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v19H5Zm4 4h.01m2.99 0h.01m2.99 0h.01M9 10h.01M12 10h.01M15 10h.01M9 13.5h.01m2.99 0h.01m2.99 0h.01M9 17.5h3m3 0h.01");
}
</style><path class="fdigtqb-l"/>`,
		"fallback": "uix-sharp:keyboard-numeric",
	});
}

export default Component;
