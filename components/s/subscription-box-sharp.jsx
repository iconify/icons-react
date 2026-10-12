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
		"content": `<style>.ipc5mmbvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 20.25h-7v-15h16.5v5.5M3.75 10h16.5M8 2.75v4.5m8-4.5v4.5M17.25 14A3.25 3.25 0 1 1 14 17.25m-1.25 1.25L14 17.25l1.25 1.25");
}
</style><path class="ipc5mmbvk"/>`,
		"fallback": "iconoven:subscription-box-sharp",
	});
}

export default Component;
