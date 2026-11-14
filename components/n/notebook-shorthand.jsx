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
		"content": `<style>.d0o8brb4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h14v17H5Zm3.5-2v4m3.5-4v4m3.5-4v4m-7.5 4h8m-8 4h8m-8 4h5");
}
</style><path class="d0o8brb4d"/>`,
		"fallback": "uix-sharp:notebook-shorthand",
	});
}

export default Component;
