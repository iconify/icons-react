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
		"content": `<style>.kpd5rvbdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 2.75h13.5v8.5H7.75zm0 5.5h13.5m-6.75 3V14L8 18.25m-5 0h7v3H3");
}
</style><path class="kpd5rvbdu"/>`,
		"fallback": "iconoven:monitor-arm-sharp",
	});
}

export default Component;
