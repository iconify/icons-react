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
		"content": `<style>.wmjmz6bva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.6 20.5H4v-18h14v10.2M7 6.5h8m-8 4h4.5M15 21l5.25-5.25m-4-.25h4.25v4.25");
}
</style><path class="wmjmz6bva"/>`,
		"fallback": "uix-sharp:magazine-share",
	});
}

export default Component;
