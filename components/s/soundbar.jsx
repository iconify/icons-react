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
		"content": `<style>.hpqzm_zum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm3 3h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01M9.879 8.879a3 3 0 0 1 4.242 0M7.983 6.212a6.25 6.25 0 0 1 8.034 0");
}
</style><path class="hpqzm_zum"/>`,
		"fallback": "uix-sharp:soundbar",
	});
}

export default Component;
