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
		"content": `<style>.dsq1n-blf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 4L4.6 19.4M10 20L4.5 20C4.2239 20 4 19.7761 4 19.5L4 14");
}
</style><path class="dsq1n-blf"/>`,
		"fallback": "keyline-icons:move-down-left",
	});
}

export default Component;
