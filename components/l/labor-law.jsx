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
		"content": `<style>.wso8o2ltg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.086 3.55l6.364 6.364l-3.536 3.536L8.55 7.086Zm-.336 6.7L4.5 17.5m8.5.5h8v3h-8Z");
}
</style><path class="wso8o2ltg"/>`,
		"fallback": "uix-sharp:labor-law",
	});
}

export default Component;
