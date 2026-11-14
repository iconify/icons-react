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
		"content": `<style>.rbywhry9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 5h5v6l4.5 2.25a2 2 0 0 1 1.5 2V17H8ZM7 21h12.5a1.5 1.5 0 0 0 1.5-1.5M10.5 17v4m6-4v4M8 14H4V2.5");
}
</style><path class="rbywhry9h"/>`,
		"fallback": "uix-sharp:skate-trainer",
	});
}

export default Component;
