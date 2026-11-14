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
		"content": `<style>.zqmi7tbpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.4 3.5H16v8.6m-4.4 3.4H2.5V6.4M16 7.5l5.5-3v10l-5.5-3m-4.5-4h.01m-8.01-4l17 17");
}
</style><path class="zqmi7tbpa"/>`,
		"fallback": "uix-sharp:live-broadcast-off",
	});
}

export default Component;
