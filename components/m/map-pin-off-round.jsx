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
		"content": `<style>.zbegmlb5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 16c-1.424 2.15-3.346 3.897-5 5c-3-2-7-6-7-11c0-1.678 1.015-2.794 2-4m3-3c.566-.148 1.387 0 2 0a7 7 0 0 1 7 7c0 .624.115 1.41 0 2M3 2l19 19");
}
</style><path class="zbegmlb5z"/>`,
		"fallback": "coolicons:map-pin-off-round",
	});
}

export default Component;
