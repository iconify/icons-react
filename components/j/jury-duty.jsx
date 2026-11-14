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
		"content": `<style>.um40k78lr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5v17m-4 0h8M3.5 6.5h17m-15 0L2.75 13M5.5 6.5L8.25 13m-5.75.5h6a3 2.5 0 0 1-6 0m16-7L15.75 13m2.75-6.5l2.75 6.5m-5.75.5h6a3 2.5 0 0 1-6 0");
}
</style><path class="um40k78lr"/>`,
		"fallback": "uix:jury-duty",
	});
}

export default Component;
