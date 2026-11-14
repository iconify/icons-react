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
		"content": `<style>.bf3xzcb_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 21.5H4.5v-19h15v9.7M9 2.5v19m3-14h4m-4 4h4m2 3.5v6m-3-3h6");
}
</style><path class="bf3xzcb_z"/>`,
		"fallback": "uix-sharp:timesheet-add",
	});
}

export default Component;
