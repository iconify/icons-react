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
		"content": `<style>.cdmh3ufhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.1 2.75h10.4l-.38.46l-2.74 3.33L14 7h-4l-.38-.46l-2.74-3.33l-.38-.46zM9.5 7h5v14.25h-5zm0 4h2m-2 3h2m-2 3h2M5 10l1.25 1.667v.833a1.25 1.25 0 0 1-2.5 0v-.833zm14 3l1.25 1.667v.833a1.25 1.25 0 0 1-2.5 0v-.833z");
}
</style><path class="cdmh3ufhi"/>`,
		"fallback": "iconoven:rain-gauge-farm-sharp",
	});
}

export default Component;
