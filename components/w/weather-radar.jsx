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
		"content": `<style>.gbd_jpbvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a5.66 5.66 0 0 0 8 8Zm4 4l2-2m-2 7.66v4.09m-3 0h6m-.95-15.39a6 6 0 0 1 3.59 3.59m-2.86-6.51a9 9 0 0 1 5.78 5.78");
}
</style><path class="gbd_jpbvc"/>`,
		"fallback": "iconoven:weather-radar",
	});
}

export default Component;
