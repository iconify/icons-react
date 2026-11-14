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
		"content": `<style>.qtiq8jb-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4.5h9v15h-9Zm-5 7.5h5m9 0h5m-14-2.75h9m-9 5.5h9");
}
</style><path class="qtiq8jb-p"/>`,
		"fallback": "uix-sharp:insulator-electric",
	});
}

export default Component;
