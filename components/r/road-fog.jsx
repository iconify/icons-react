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
		"content": `<style>.s5jjbb1bl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5L6 15m14.5 6.5L18 15m-6 1.5v4m-8.5-16h12M7 8.5h13.5m-17 3.75H17");
}
</style><path class="s5jjbb1bl"/>`,
		"fallback": "uix-sharp:road-fog",
	});
}

export default Component;
