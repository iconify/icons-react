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
		"content": `<style>.lerp2gb5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21L7.5 9l7.5 7.5Zm8.5-14l1-4m1.25 7.25l4.5-4.5M17 13l4-1");
}
</style><path class="lerp2gb5m"/>`,
		"fallback": "uix-sharp:reaction-celebrate",
	});
}

export default Component;
