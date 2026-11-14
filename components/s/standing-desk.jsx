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
		"content": `<style>.ppyvn8bfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7H15v3H2.5Zm1 14.5h4m-2 0V10M10 21.5h4m-2 0V10m5.25-3.75L19.5 4l2.25 2.25M19.5 4v16m-2.25-2.25L19.5 20l2.25-2.25");
}
</style><path class="ppyvn8bfv"/>`,
		"fallback": "uix-sharp:standing-desk",
	});
}

export default Component;
