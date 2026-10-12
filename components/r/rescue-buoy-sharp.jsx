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
		"content": `<style>.rqt6ax9kk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm4.25 0a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 1 1-5.5 0Zm4.69 1.94l3.01 3.01m-6.89-3.01l-3.01 3.01m3.01-6.89L7.05 7.05m6.89 3.01l3.01-3.01");
}
</style><path class="rqt6ax9kk"/>`,
		"fallback": "iconoven:rescue-buoy-sharp",
	});
}

export default Component;
