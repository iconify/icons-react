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
		"content": `<style>.auo923b6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v16H5Zm2 16V21h10v-2.5m-5-16v16m-2.75-10v4m5.5-4v4");
}
</style><path class="auo923b6g"/>`,
		"fallback": "uix-sharp:larder-unit",
	});
}

export default Component;
