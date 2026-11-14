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
		"content": `<style>.vt4atwbso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19V18h-19ZM5 18v3.5M19 18v3.5m-15-6v-10h4c1 2.5 3 3.5 5.5 4l5 1c1.5.25 2.5 1.5 2.5 3v2M4 12.75h17M9.5 7.5l-1 1.75m3.75-.5l-.75 1.5");
}
</style><path class="vt4atwbso"/>`,
		"fallback": "uix-sharp:shoe-fitting-bench",
	});
}

export default Component;
