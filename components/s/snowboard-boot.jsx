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
		"content": `<style>.syt994-ne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3h8v6.5l5 2a3 3 0 0 1 2 2.75v2.25h-17zm-2 13.5V21H7v-1.5h3.5V21H14v-1.5h3.5V21h3v-4.5M10 6h3.5m-3 3.5h3");
}
</style><path class="syt994-ne"/>`,
		"fallback": "uix-sharp:snowboard-boot",
	});
}

export default Component;
