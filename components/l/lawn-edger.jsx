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
		"content": `<style>.v5u7ep_9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14.75a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 0h.01M10.25 12l8.25-8.25M17 2.5l3.25 3.25M2.5 21.5h19m-6.5 0v-3m3 3V18");
}
</style><path class="v5u7ep_9u"/>`,
		"fallback": "uix-sharp:lawn-edger",
	});
}

export default Component;
