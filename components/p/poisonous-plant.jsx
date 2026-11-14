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
		"content": `<style>.tehd-io6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21.5V10m0 4c-3.5 0-6-2.5-6-6c3.5 0 6 2.5 6 6Zm0-4c0-3.5 2.5-6.5 6.5-6.5c0 4-2.5 6.5-6.5 6.5Zm6.5 5.5l5 5m0-5l-5 5");
}
</style><path class="tehd-io6q"/>`,
		"fallback": "uix-sharp:poisonous-plant",
	});
}

export default Component;
