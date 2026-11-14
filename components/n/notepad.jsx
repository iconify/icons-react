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
		"content": `<style>.xy95f_bmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5h15v17h-15Zm3.5-2v4m4-4v4m4-4v4M8 11h8m-8 3.5h8M8 18h4.5");
}
</style><path class="xy95f_bmh"/>`,
		"fallback": "uix-sharp:notepad",
	});
}

export default Component;
