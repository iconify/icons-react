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
		"content": `<style>.rhbh_m51m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.25a8.5 2.75 0 0 1 17 0Zm6-18.5h5v2.5h-5zm2.5 2.5v5m0 3v5.25m-1.5-8.25h3v3h-3z");
}
</style><path class="rhbh_m51m"/>`,
		"fallback": "iconoven:space-elevator-sharp",
	});
}

export default Component;
