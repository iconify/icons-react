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
		"content": `<style>.faioyebkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.596 3.575l2.829 2.829a1 1 0 0 1 0 1.414L7.818 18.425a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414L14.182 3.575a1 1 0 0 1 1.414 0ZM8.879 8.879l4.242 4.242M18 15v6m-3-3h6");
}
</style><path class="faioyebkm"/>`,
		"fallback": "uix-sharp:medicine-plus",
	});
}

export default Component;
