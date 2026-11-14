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
		"content": `<style>.m2_sjjbhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12ZM12 9v6m-1.25-4.5L12 9");
}
</style><path class="m2_sjjbhw"/>`,
		"fallback": "uix-sharp:junction-number",
	});
}

export default Component;
